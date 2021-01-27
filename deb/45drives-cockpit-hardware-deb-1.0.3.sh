#!/usr/bin/bash
mkdir 45drives-cockpit-hardware_1.0.3-1
git clone --branch 1.0.3 https://github.com/45Drives/cockpit-hardware.git
cp -R cockpit-hardware/src/fakeroot/* 45drives-cockpit-hardware_1.0.3-1
cp -r cockpit-hardware/deb/DEBIAN 45drives-cockpit-hardware_1.0.3-1/DEBIAN
rm -rf cockpit-hardware
dpkg-deb --build 45drives-cockpit-hardware_1.0.3-1