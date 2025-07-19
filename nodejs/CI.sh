

echo "Testing running ..."
npm run test

if [ $? -eq 0 ]; then
  echo "Tests passed successfully"
  git add .
  git commit -m "Updated Push after successful tests"
  git push
  exit 0
else
  echo "Tests failed"
  exit 1
fi