9/17/25
9:47:29.999 AM	
Audit:[timestamp=09-17-2025 09:47:29.999, user=sc_admin, action=list_health_subset, info=granted object="deployment" operation=list, cap=1]
action = list_health_subsethost = si-i-0ad2a97c6032dc1ca.prd-p-cwxcb.splunkcloud.cominfo = grantedsource = audittrailsourcetype = audittrailuser = sc_admin 
ip=192.168.10.50

9/17/25
9:47:29.999 AM	
Audit:[timestamp=09-17-2025 09:47:29.999, user=sc_admin, action=list_health, info=denied object="deployment" operation=list, cap=1]
action = list_healthhost = si-i-0ad2a97c6032dc1ca.prd-p-cwxcb.splunkcloud.cominfo = deniedsource = audittrailsourcetype = audittrailuser = sc_admin
url = http://198.51.100.22/malicious

9/17/25
9:47:29.992 AM	
Audit:[timestamp=09-17-2025 09:47:29.992, user=sc_admin, action=rest_properties_get, info=granted REST: /static/appIcon.png, cap=1]
action = rest_properties_gethost = si-i-0ad2a97c6032dc1ca.prd-p-cwxcb.splunkcloud.cominfo = granted REST: /static/appIcon.pngsource = audittrailsourcetype = audittrailuser = sc_admin
file_hash = e99a18c428cb38d5f260853678922e03

9/17/25
9:47:29.984 AM	
EDR: [timestamp=09-17-2025 10:20:05.345, host=EDR-Agent-02, user=jdoe, action=quarantine, file=malware_test.exe]