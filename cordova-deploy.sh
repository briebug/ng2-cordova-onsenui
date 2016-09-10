ng build --e=mobile
rm -fr www/
mkdir www
cp -R dist/** www/
