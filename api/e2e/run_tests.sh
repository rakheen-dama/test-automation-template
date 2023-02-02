#cucumber tag
tag=$1

#export the environment variables
export COMMON_CONFIG_FILE=env/common.env

# Run the tests
echo "Running tests with tag: $tag"
npm run cucumber -- --profile "$tag" || npm run postcucumber