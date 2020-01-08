# load libraries
library(ggplot2)
library(gtools)

# import data
data <- read.csv("train.csv")

### --- data preprocessing --- ###

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

# store encoding of factors 
store_encoding <- function(col) {
  lvls <- levels(factor(col))
  labs <- seq(1, length(lvls))
  key <- as.data.frame(cbind(lvls, labs))
  colnames(key) <- c("lvls", "labs")
  key$labs <- as.numeric(key$labs)
  
  return(key)
}

# --- taking care of missing numeric data --- #

# subset numeric data
data_numeric <- data[, sapply(data, is.numeric)]

# extract col names w/ na vals
numeric_names_has_na <- colnames(as.matrix(data_numeric))[colSums(is.na(as.matrix(data_numeric))) > 0]

# store cols w/ na vals
numeric_cols_has_na <- data_numeric[, numeric_names_has_na]

# clean cols w/ na
numeric_cols_clean <- as.data.frame(apply(as.matrix(numeric_cols_has_na), 2, replace_na_mean))

# check na
check_na_numeric <- colSums(is.na(as.matrix(numeric_cols_clean))) == 0

# check mean
mean_raw_numeric <- colMeans(as.matrix(numeric_cols_has_na), na.rm = TRUE)
mean_clean_numeric <- colMeans(as.matrix(numeric_cols_clean))
check_mean_numeric <- mean_raw_numeric == mean_clean_numeric

# replace dirty cols w/ clean cols 
data_numeric_clean <- data_numeric
data_numeric_clean[, numeric_names_has_na] <- numeric_cols_clean

# final check na and mean
check_na_numeric_final <- colSums(is.na(as.matrix(data_numeric_clean))) == 0
mean_raw_numeric_final <- colMeans((as.matrix(data_numeric)), na.rm = TRUE) 
mean_clean_numeric_final <- colMeans((as.matrix(data_numeric_clean)))
check_mean_numeric_final <- mean_raw_numeric_final == mean_clean_numeric_final

# --- scale the data --- #

# # separate id col from scaling
# id_numeric_clean <- as.data.frame(data_numeric_clean[,"Id"])
# colnames(id_numeric_clean) <- c("Id")
# id_col_index <- which(colnames(data_numeric_clean) == "Id")
# other_numeric_clean <- as.data.frame(data_numeric_clean[,-c(id_col_index)])
# 
# # apply scale function
# other_scaled_clean <- as.data.frame(scale(other_numeric_clean))
# 
# # combine id and scaled
# data_numeric_clean <- cbind(id_numeric_clean, other_scaled_clean)

# --- taking care of categorigcal data --- # 

# subset factor data
data_factor <- data[, sapply(data, is.factor)]

# convert na vals to factors
data_factor <- as.data.frame(na.replace(apply(data_factor, 2, as.factor), "NA"))

# encode cols 
data_encoded <- apply(data_factor, 2, encode_col) 

# --- combine cleaned numeric and factor data --- #

# bind cols
data_clean <- cbind(data_encoded, data_numeric_clean)

# --- export clean data to file --- #

# write to csv, drop row names wrapper
# write.csv(data_clean, file = "test_clean.csv", row.names = FALSE)

# --- quality control checks --- #

# store exported data
export_check <- read.csv("test_clean.csv")

# print numeric checks
if (sum(check_na_numeric) == length(check_na_numeric) &&
    sum(check_mean_numeric) == length(check_mean_numeric)) {
  print('checks on numeric: TRUE')
} else {
  print('checks on numeric: FALSE')
}

# print final numeric checks
if (sum(check_na_numeric_final) == length(check_na_numeric_final) &&
    sum(check_mean_numeric_final) == length(check_mean_numeric_final)) {
  print('checks on numeric final: TRUE')
} else {
  print('checks on numeric final: FALSE')
}

# print export check
if (all.equal(data_clean, export_check)) {
  print('export check: TRUE')
} else {
  print('export check: FALSE')
}