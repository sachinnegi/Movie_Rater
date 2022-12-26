https://devconnected.com/how-to-list-users-and-groups-on-linux/

https://www.section.io/engineering-education/user-groups-and-permissions-linux/

- List All the Users in Linux
    - $ cat /etc/passwd
    - root:x:0:0:root:/root:/bin/bash
    - daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    - bin:x:2:2:bin:/bin:/usr/sbin/nologin

- List all the groups 
    - $ cat /etc/group
    - root:x:0:
    - lxd:x:131:sachin
    - sachin:x:1000:
    - adm:x:4:syslog,sachin

- All the groups the user sachin belongs to
    - $ groups sachin
    - sachin : sachin adm cdrom sudo dip plugdev lpadmin lxd sambashare

- Groups simply allow a user that's a member of group X, access to files and directories that are present on the disk which are assigned the group X

- Add a Group 
    - $ sudo groupadd docker

- Add your user to the docker group
    - $ sudo usermod -aG docker sachin
    - $ cat /etc/group | grep -i docker
    - docker:x:998:sachin

- Which process is listening on a port
    - $ netstat -nlp | grep 3005
	- n = numeric
	- l = only listening process
	- p = process id
