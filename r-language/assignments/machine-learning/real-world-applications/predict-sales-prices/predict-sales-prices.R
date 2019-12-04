# load libraries
library(ggplot2)

# import train
train <- read.csv("train.csv")

### --- train Preprocessing --- ###

# --- function defs --- # 

# replaces na in col w/ mean
replace_na_mean <- function(col) {
  col_clean = ifelse(is.na(col),
                     ave(col, FUN = function(x) mean(x, na.rm = TRUE)),
                     col)
  
  return(col_clean)
}

# encodes factor col w/ labels equal to level's index
encode_col <- function(col) {
  lvls <- levels(factor(col))
  labs <- seq(1, length(lvls))
  col_encode <- as.numeric(factor(col, levels = lvls, labels = labs))
  
  return(col_encode)
}

# --- taking care of missing numeric train --- #

# subset numeric train
train_numeric <- train[, sapply(train, is.numeric)]

# extract col names w/ na vals
numeric_names_has_na <- colnames(as.matrix(train_numeric))[colSums(is.na(as.matrix(train_numeric))) > 0]

# store cols w/ na vals
numeric_cols_has_na <- train_numeric[, numeric_names_has_na]

# clean cols w/ na
numeric_cols_clean <- as.train.frame(apply(as.matrix(numeric_cols_has_na), 2, replace_na_mean))

# check na
check_na_numeric <- colSums(is.na(as.matrix(numeric_cols_clean))) == 0

# check mean
mean_raw_numeric <- colMeans(as.matrix(numeric_cols_has_na), na.rm = TRUE)
mean_clean_numeric <- colMeans(as.matrix(numeric_cols_clean))
check_mean_numeric <- mean_raw_numeric == mean_clean_numeric

# replace dirty cols w/ clean cols 
train_numeric_clean <- train_numeric
train_numeric_clean[, numeric_names_has_na] <- numeric_cols_clean

# final check na and mean
check_na_numeric_final <- colSums(is.na(as.matrix(train_numeric_clean))) == 0
mean_raw_numeric_final <- colMeans((as.matrix(train_numeric)), na.rm = TRUE) 
mean_clean_numeric_final <- colMeans((as.matrix(train_numeric_clean)))
check_mean_numeric_final <- mean_raw_numeric_final == mean_clean_numeric_final

# --- taking care of categorigcal train --- # 

# subset factor train
train_factor <- train[, sapply(train, is.factor)]

# encode cols 
train_encoded <- apply(train_factor, 2, encode_col) 

# --- combine cleaned numeric and factor train --- #

# bind cols
train_clean <- cbind(train_encoded, train_numeric_clean)
head(train_clean)

# --- export clean data to file --- #

# write to csv, drop row names wrapper
write.csv(train_clean, file = "train_clean.csv", row.names = FALSE)

# check file
export_check <- read.csv("train_clean.csv")
