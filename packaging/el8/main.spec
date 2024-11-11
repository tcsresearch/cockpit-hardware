Name: ::package_name::
Version: ::package_version::
Release: ::package_build_version::%{?dist}
Summary: ::package_description_short::
License: ::package_licence::
URL: ::package_url::
Source0: %{name}-%{version}.tar.gz
BuildArch: ::package_architecture_el::
Requires: ::package_dependencies_el::

BuildRoot: %{_tmppath}/%{name}-%{version}-%{release}-root

Obsoletes: 45drives-cockpit-hardware
Provides: 45drives-cockpit-hardware
Conflicts: 45drives-cockpit-hardware

Obsoletes: cockpit-hardware
Provides: cockpit-hardware
Conflicts: cockpit-hardware

%description
::package_title::
::package_description_long::

%prep
%setup -q

%build

%install
make DESTDIR=%{buildroot} install

%files
%dir /usr/share/cockpit/45drives-system
%dir /usr/share/cockpit/45drives-disks
%dir /usr/share/cockpit/45drives-motherboard
/usr/lib/udev/rules.d/68-cockpit-45drives-disks.rules
%defattr(-,root,root,-)
/usr/share/cockpit/45drives-disks/*
/usr/share/cockpit/45drives-motherboard/*
/usr/share/cockpit/45drives-system/*
/usr/lib/udev/rules.d/68-cockpit-45drives-disks.rules

%changelog
* Mon Nov 11 2024 Jordan Keough <jkeough@45drives.com> 2.4.6-1
- Push to stable with Hardware Refresh updates
* Tue Oct 15 2024 Jordan Keough <jkeough@45drives.com> 2.4.5-1
- b
- 1
- Adds support for new 1UGW mobo (MC13-LE1)
* Thu Sep 19 2024 Jordan Keough <jkeough@45drives.com> 2.4.4-1
- Fully adds MZ73 board support
* Fri Sep 06 2024 Jordan Keough <jkeough@45drives.com> 2.4.3-1
- Adds Gigabyte MS73-HB0 motherboard support
* Fri Aug 23 2024 Jordan Keough <jkeough@45drives.com> 2.4.2-1
- Adds second new Gigabyte motherboard (MS03-6L0) and fixes error in SATA Helper
  script so all sata drives plugged into mobo ports show in 45Drives Motherboard
  module
- Updating build number due to packaging tag conflict
* Tue Aug 20 2024 Jordan Keough <jkeough@45drives.com> 2.4.1-1
- Adds ME03 board support with finalized assets
* Tue Aug 20 2024 Jordan Keough <jkeough@45drives.com> 2.4.0-1
- TESTING - Adds Gigabyte  ME03-CE0 Motherboard Support
* Tue Jul 09 2024 Jordan Keough <jkeough@45drives.com> 2.3.6-2
- Incrementing build to resolve conflict
* Tue Jul 09 2024 Jordan Keough <jkeough@45drives.com> 2.3.6-1
- Fixes a bug with H12SSL-i motherboards ID's case sensitivity
* Thu Jan 25 2024 Mark Hooper <mhooper@45drives.com> 2.3.5-2
- Added support for X11SPH-nCTF and X11SPH-nCTPF motherboards in 45Drives Motherboard
  Module.
- Fixed a bug which caused drives to render in the improper row for F8X2 and F8X3
  Servers.
* Fri Jan 19 2024 Mark Hooper <mhooper@45drives.com> 2.3.5-1
- added support for X11SPH-nCTF and X11SPH-nCTPF motherboards in 45Drives Motherboard
  Module.
* Tue Nov 21 2023 Mark Hooper <mhooper@45drives.com> 2.3.4-1
- Releasing v2.3.4 to stable repo
- added support for HL15 servers in 45Drives-Disks and 45Drives-System
- added support for X12SPL-F Motherboards in all modules
- added support for Stornado F2 servers
- updated 45drives-tools dependency minimum version to 3.0.1
- added support for H12SSL-i Motherboard in all modules
* Thu Nov 16 2023 Mark Hooper <mhooper@45drives.com> 2.3.3-4
- added chassis image to system tab for Stornado F2
* Thu Nov 16 2023 Mark Hooper <mhooper@45drives.com> 2.3.3-3
- updated name of chassis used for new NVME Stornado from 2UTM to F2
* Thu Nov 16 2023 Mark Hooper <mhooper@45drives.com> 2.3.3-2
- changed all instances of 2UTM to F2 for new Stornado server
* Wed Oct 04 2023 Mark Hooper <mhooper@45drives.com> 2.3.3-1
- added support for HL15 servers in 45Drives-Disks and 45Drives-System
* Fri Jun 23 2023 Mark Hooper <mhooper@45drives.com> 2.3.2-1
- Updated disks module to inform user that Ceph Gateways are not compatible
* Wed Mar 22 2023 Mark Hooper <mhooper@45drives.com> 2.3.1-3
- added support for X12SPL-F Motherboards in all modules
- updated dmidecode dependency to require 3.3 or later
- updated motherboard layout files to include mask image paths
* Wed Mar 22 2023 Mark Hooper <mhooper@45drives.com> 2.3.1-2
- updated dmidecode dependency to require 3.3 or later
* Tue Mar 21 2023 Mark Hooper <mhooper@45drives.com> 2.3.1-1
- added support for X12SPL-F Motherboards in all modules
* Mon Feb 27 2023 Mark Hooper <mhooper@45drives.com> 2.3.0-3
- updated 45Drives-tools dependency to minimum version 2.2.0
- system tab will show HBA firmware version
- disks tab will show HBA firmware version
- added support for 9361-24i cards in all modules
- added support for melanox MT27800 cards in all modules
- fixed 9600 series card scaling issue in 45Drives-motherboard
* Thu Feb 16 2023 Mark Hooper <mhooper@45drives.com> 2.3.0-2
- fixed 9600 series card scaling issue in 45Drives-motherboard
* Thu Feb 16 2023 Mark Hooper <mhooper@45drives.com> 2.3.0-1
- updated 45Drives-tools dependency to minimum version 2.2.0
- system tab will show HBA firmware version
- disks tab will show HBA firmware version
- added support for 9361-24i cards in all modules
- added support for melanox MT27800 cards in all modules
* Thu Feb 02 2023 Mark Hooper <mhooper@45drives.com> 2.2.2-2
- Added support for F8X servers in Disks and System modules
- updated 45Drives-tools dependency
* Tue Nov 29 2022 Mark Hooper <mhooper@45drives.com> 2.2.2-1
- updated zfs_info script to fix bug when single disk vdevs are encountered
- single device vdevs are now reported as both a disk and vdev by zfs_info script
* Mon Oct 31 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-6
- fixed drive placement error in 45drives-disks for XL60-H32 units not displaying
  disk 4-10 properly
* Mon Oct 31 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-5
- added support for 9400-16i HBA cards in System, Disks and Motherbaord Modules
* Wed Sep 28 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-4
- Incremented build for release on repo
- added support for BCM57412 network cards
- added support for 9361-16i HBA cards
* Wed Sep 28 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-3
- added support for 9361-16i HBA cards
- added support for BCM57412 network cards
* Wed Sep 14 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-2
- modified how network cards are detected in 45drives-system's pci helper script
* Wed Sep 14 2022 Mark Hooper <mhooper@45drives.com> 2.2.1-1
- updated zfs_info script in 45drives-disks to inform user about the requirement
  for zfs devices to be using device aliases
- added support for ASRockRack EPC621D8A Motherboards in 45Drives-motherboard
- updated 45drives-tools dependency to 2.1.0
* Tue Aug 23 2022 Mark Hooper <mhooper@45drives.com> 2.2.0-2
- added support for ASRockRack EPC621D8A Motherboards
- updated how PCI cards are rendered in 45drives-motherboard
- updated helper scripts in 45drives-System and 45drives-Motherboard to work with
  ASRockRack EPC621D8A Motherboards
- updated 45drives-tools dependency to 2.1.0
* Tue Jul 26 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-9
- improved error handling in zfs_info script
- warning messages will now be produced if zpools aren't created with device aliasing
* Fri Jul 22 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-8
- improved zfs_info script error handling
* Wed Jul 06 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-7
- updated network helper script in 45drives-system to use ip -j addr instead of ip
  addr
- made adjustments to popup content in 45drives-motherboard so as to not cut off
  end characters
* Wed Jul 06 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-6
- fixed bug in motherboard cutting off last character in hba card popups
* Wed Jul 06 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-5
- updated how addresses are reported in network helper script in 45drives-system
- fixed bug in motherboard cutting off last characters when mousing over X540-AT2
  cards
* Wed Jul 06 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-4
- updated network helper script in 45drives-system to use ip -j addr instead of ip
  addr
* Mon Jul 04 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-3
- updated network script in 45drives-system to use ip addr command with json output
- added iproute2 dependency for ubuntu
* Thu Jun 30 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-2
- fixed incorrect path when calling the network script in 45drives-motherboard module
* Thu Jun 30 2022 Mark Hooper <mhooper@45drives.com> 2.1.3-1
- updated scripts to use lspci instead of storcli64 in 45drives-motherboard and 45drives-system
  modules
- updated 45drives-tools dependency to 2.0.8 minimum version
* Thu Jun 30 2022 Mark Hooper <mhooper@45drives.com> 2.1.2-3
- modified 45drives-tools dependency
* Mon Jun 27 2022 Mark Hooper <mhooper@45drives.com> 2.1.2-2
- added support for 9600 series HBA cards
- updated 45drives-tools dependency to 2.0.8 minimum
* Fri Jun 03 2022 Mark Hooper <mhooper@45drives.com> 2.1.2-1
- Re-wrote all cockpit modules using VueJS framework
- all modules now feature a dark mode
- all modules are now better suited for use on mobile
- 45drives-disks will now highlight and animate zpools, and vdevs when using zfs
- Improved error handling for unknown hardware configurations
* Tue May 17 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-7
- updated 45drives-tools dependency
- added handling for VMs
- updated helper scripts for 45drives-system and 45drives-motherboard to play nice
  with vms
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-6
- updated guard check for page content
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-5
- updated error handling
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-4
- updated how notifications are sent
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-3
- updated layout of motherboard page
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-2
- redirected stderr in zfs_info
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.1-1
- updated 45Drives-Motherboard, 45Drives-Disks and 45Drives-System modules using
  VueJS
- Added dark mode for all modules
- Disks module will now highlight and animate zpools, vdevs and devices
- Updated all modules to work on mobile
* Mon May 16 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-13
- updated zfs_info script
* Thu May 12 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-12
- added notifications
* Tue May 10 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-11
- updated build number manually
* Tue May 10 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-10
- updated makefile
* Tue May 10 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-9
- updated makefile
* Tue May 10 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-8
- updated makefile because the ubuntu container uses dash as its default shell
* Tue May 10 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-7
- 8th build
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-6
- 6th build, added more flags
- 7th build, passed a --no-parallel flag to dh make because yarn is trash
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-5
- 5th build, added network concurrency flag to make file
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-4
- fourth build, tried initializing with a yarn.lock file in each subdir
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-3
- third build
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-2
- second build using autopackaging
* Mon May 09 2022 Mark Hooper <mhooper@45drives.com> 2.1.0-1
- first build of cockpit-45drives-hardware using vue.js
* Wed Feb 23 2022 Mark Hooper <mhooper@45drives.com> 2.0.3-2
- releasing 2.0.3-2 on 45drives stable repo
- added support for 2U Stornado
- added disk images for Toshiba HDDs, Seagate Nytro SAS and Micron 5300 ssds
- Updated H11SSL-i motherboard background assets
* Wed Feb 16 2022 Mark Hooper <mhooper@45drives.com> 2.0.3-1
- Added support for 2U Stornado
- Added disk images for Toshiba HDDs, Seagate Nytro SAS and Micron 5300 drives.
- updated H11SSL-i motherboard background assets
* Fri Dec 10 2021 Mark Hooper <mhooper@45drives.com> 2.0.2-3
- fixed bug in disks module causing 16th drive in hybrid 16 rows to not be displayed
* Tue Nov 16 2021 Mark Hooper <mhooper@45drives.com> 2.0.2-2
- updated helper scripts for 45drives-system and 45drives-motherboard to play nice
  with vms
* Tue Nov 16 2021 Mark Hooper <mhooper@45drives.com> 2.0.2-1
- added support for X11SPi-TF Motherboards in 45drives-motherboard module
- updated assets for X11SPL-F Motherboard
- modified how detected ram is displayed in 45drives-motherboard module
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.1-5
- added ipmi lan info section to 45Drives-system module
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.1-4
- updated unsupported motherboard message in 45Drives-motherboard module
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.1-3
- updated helper scripts to handle virtual machine hardware configurations
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.1-2
- updated CSS for 45Drives Disks
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.1-1
- added new product keys for Bronze, Silver and Gold Intel CPUs using X11SPL-F Motherboards
- added a placeholder image to 45Drives-system page
- Mouseover popups on motherboard no longer extend below board footprint
- Added Package for Rocky Linux
- updated README.md
* Mon Aug 23 2021 Mark Hooper <mhooper@45drives.com> 2.0.0-5
- updated images used in 45drives-system page
* Fri Aug 20 2021 Mark Hooper <mhooper@45drives.com> 2.0.0-4
- build 3, added require el7 folder
* Fri Aug 20 2021 Mark Hooper <mhooper@45drives.com> 2.0.0-3
- second build, changed deb dependencies format for >= style entry
* Fri Aug 20 2021 Mark Hooper <mhooper@45drives.com> 2.0.0-2
- first build using autopackaging
* Fri Aug 20 2021 Mark Hooper <mhooper@45drives.com> 2.0.0-1
- added auto packaging for Ubuntu, Rocky and CentOS7