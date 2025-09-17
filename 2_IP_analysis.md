# IP Alert Analysis

## Title
Internal IP Activity

## Description
An IP address [192.168.10.50] was observed in the audit log performing a list operation on the health subset.

## Analysis
- **Who:** sc_admin
- **What:** list_health operation
- **When:** 2025-09-17 09:47:29.999 AM
- **Where:** 192.168.10.50
- **Why:** Granted access for routine operation
- **How:** Detected via SIEM tool and validated via WHOIS,VirusTotal and AbuseIPDB

## Escalation
No escalation required - activity is routine system operation

# MITRE ATT&CK Mapping
Tactic: Reconnaissance
Technique: T1087

# Status: Done
# Assigned: Myself