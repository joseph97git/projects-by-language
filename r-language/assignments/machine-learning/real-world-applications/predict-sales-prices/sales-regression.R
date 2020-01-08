# load libraries
library(ggplot2)
library(caTools)

# import data
data <- read.csv("train_clean.csv")

### --- data-preprocessing --- ###

# set seed for consistency
set.seed(123)

# define split
split = sample.split(data$SalePrice, SplitRatio = 2/3)

# split into train and test
train <- subset(data, split == TRUE)
test <- subset(data, split == FALSE)

### --- multi-linear regression analysis --- ###

# --- fit mlr model --- #

# fit include all vars
modfit_mlr_all <- lm(formula = SalePrice ~ ., data = train)

# get only significant vars p <= 0.001 *** 
sig_vars_mlr <- data.frame(summary(modfit_mlr_all)$coef[summary(modfit_mlr_all)$coef[,4] <= .001, 4])

# define sig vars in formula
sig_vars_mlr_formula <- paste(rownames(sig_vars_mlr), collapse = "+")

# define mlr w/ sig vars complete formula
mlr_formula <- paste("SalePrice ~", sig_vars_mlr_formula, sep = "")

# fit inclue sig vars
modfit_mlr_sig <- lm(formula = as.formula(mlr_formula), data = train)

# predict on test set
y_pred_test_mlr <- predict(modfit_mlr_sig, newdata = test)


# --- calc error --- #

# get percent error for predicted values
percent_actual_pred <- abs(test$SalePrice - y_pred_test_mlr) / test$SalePrice

# calc average error
avg_error <- mean(percent_actual_pred)

# --- print model results --- #

# details
summary_mlr_sig <- summary(modfit_mlr_sig)
summary_mlr_sig

# avg error on test set
print(cat('the avg error is: ', avg_error))

# --- predict sale price for given input --- # 

# store names of sig vars
names_mlr_sig <- attr(summary_mlr_sig$terms, "term.labels")

