#!/bin/sh

npm run build;

BUILD_DIR=${CODE_PATH}/cdrappi.github.io/;

cp -r build/* $BUILD_DIR;

# Handle 404's by copying the HTML but insert something that re-routes via JS
SCRIPT="<script>document.addEventListener('DOMContentLoaded', function() { var location = window.location; var currentUrl = location.href; var baseurl = location.protocol + '//' + location.host; var redirect = sessionStorage.redirect; delete sessionStorage.redirect; if (redirect && redirect !== currentUrl) { history.replaceState(null, null, redirect); } else { history.replaceState(null, null, baseurl);} }); </script>"
awk -v script="$SCRIPT" '/<\/body>/ {print substr($0, 1, index($0, "</body>") - 1) "\n" script "\n" substr($0, index($0, "</body>")); next} {print}' "$BUILD_DIR/index.html" > "$BUILD_DIR/404.html"

cd $BUILD_DIR;
commit_message=""
if [ "$1" != "" ]; then
    commit_message="$1"
fi

git add -A :/ && git commit -am "$commit_message" && git push origin master
