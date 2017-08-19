rm -rf static && \
mv dist/static static && \
rm -rf index.html && \
mv dist/index.html index.html && \
rm -rf dist && \
cp index.html events/index.html && \
cp index.html feedbacks/index.html && \
cp index.html home/index.html && \
cp index.html events/index.html