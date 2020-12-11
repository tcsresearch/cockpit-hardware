# cockpit-hardware
A cockpit module for 45Drives storage servers.

## Supported OS
- CentOS 8.X
- CentOS 7.X

## Features (Version 1.0.1)
### System Information
<img src="https://raw.githubusercontent.com/45Drives/cockpit-hardware/master/documentation/system_overview.png">
<img src="https://raw.githubusercontent.com/45Drives/cockpit-hardware/master/documentation/system_detail.png">
Lists information about your 45Drives Storinator product including:

* System Information (model, serial and chassis data)
* Motherboard (manufacturer, model and serial numbers)
* CPU (Model and temperature)
* PCI Devices (Speeds, slot numbers, bus addresses, installed cards, and models)
* Memory (Location, Memory Type, Size, Manufacturer, serial and temperature readings)
* Network Information (Connection Names, States, MAC & IP Addresses, and PCI information if detected)

### Interactive Motherboard Application
Shows the physical layout and placement of all PCI cards, Memory modules and SATA connections. 

<img src="https://raw.githubusercontent.com/45Drives/cockpit-hardware/master/documentation/interactive_motherboard.png">

Currently supports the following motherboard models:
* X11DPL-i
* X11SPL-F
* H11SSL-i
* X11SSH-CTF
* X11SSM-F

## Installation
### RPM Package:
#### CentOS 8:
Download the latest release from the releases page (cockpit-hardware-1.0.1-1.el8.x86_64.rpm).
```
[root@server ~]# systemctl stop cockpit.socket
[root@server ~]# dnf install /path/to/downloaded/package/cockpit-hardware-1.0.1-1.el8.x86_64.rpm
[root@server ~]# systemctl start --now cockpit.socket
```

#### CentOS 7:
Download the latest release from the releases page (cockpit-hardware-1.0.1-1.el7.x86_64.rpm).
```
[root@server ~]# systemctl stop cockpit.socket
[root@server ~]# yum install /path/to/downloaded/package/cockpit-hardware-1.0.1-1.el7.x86_64.rpm
[root@server ~]# systemctl start --now cockpit.socket
```
### From Github Repository:
note, you need to install the cockpit package and the [45Drives tools](https://github.com/45Drives/tools) package. 
```
[root@server ~]# git clone https://github.com/45Drives/cockpit-hardware.git
[root@server ~]# systemctl stop cockpit.socket
[root@server ~]# cp -r cockpit-hardware/usr/share/cockpit/hardware /usr/share/cockpit
[root@server ~]# cp cockpit-hardware/opt/tools/storcli64 /opt/tools/storcli64
[root@server ~]# systemctl start --now cockpit.socket

```

## Usage
Enter the ip address of your storage server into a web browser using port 9090.
Example:
```
http://192.168.13.37:9090
```
Then enter your login credentials (you must have admin rights to use cockpit-hardware)
<img src="https://raw.githubusercontent.com/45Drives/cockpit-hardware/master/documentation/login.png">
