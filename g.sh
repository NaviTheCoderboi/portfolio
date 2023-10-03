# sh script to add, commit and push
# Add all files
git add .

# Commit with message
git commit -m "$1"

# Push to origin
git push origin main