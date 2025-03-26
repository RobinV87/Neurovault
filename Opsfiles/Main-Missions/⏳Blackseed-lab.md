# GHOSTROOT MISSION 01: BLACKSEED.LAB  
**Codename:** BLACKSEED.LAB  
**Operator:** Ghostroot // ARCANA.NODE  
**Track:** Infrastructure & Recon — Red Initiate  
**Deadline:** 25 April 2025  
**Time Allocation:** ~7–10 hrs/week  
**Clearance Level:** INTERNAL // GHOSTROOT ONLY  

---

## MISSION OBJECTIVE

Establish a secure, modular internal hacker lab using Raspberry Pi devices and a segmented internal network.  
All configurations, decisions, and setups will be documented in a blog-style GitHub repository.  
This lab will serve as the operational foundation for future offensive and defensive exercises.

---

## PHASE OVERVIEW & DELIVERABLES

### **Phase 1: DESIGN & LAYOUT**  
- Map devices: Pi 5, Pi Zero 2 Ws, and roles (e.g. attack node, C2, logging, webserver)  
- Define network architecture: subnetting, segmentation, SSH access, isolation  
- Assign OS & toolkits per device  

**Deliverable:**  
`/docs/architecture.md` — network layout and node assignments

---

### **Phase 2: SETUP & HARDENING**  
- Flash OS images and configure secure access (SSH, VNC optional)  
- Assign static IPs, set hostname conventions  
- Apply security layers: SSH key auth, firewall (UFW), non-root user policies  
- Establish secure management node (main access point)  

**Deliverable:**  
`/setup/raspi-hardening.md` — hardening procedures per device

---

### **Phase 3: INTERNAL SERVICES**  
- Deploy 1–2 core services (e.g. Pi-hole, C2 stub, internal web server)  
- Verify secure internal communication  
- Begin logging and node visibility setup  

**Deliverable:**  
`/services/README.md` — services overview, deployment notes

---

### **Phase 4: DOCUMENTATION**  
- Commit all scripts, configs, and diagrams to version control  
- Write mission log as a blog-style post, with breakdowns, decisions, challenges  
- Identify lessons learned and areas for next mission  

**Deliverable:**  
`/blog/blackseed_lab_report.md` — full Ghostroot mission debrief

---

## SUGGESTED TOOLS  
- VIM (editing configs)  
- GitHub CLI / Git  
- Draw.io or Excalidraw (network diagramming)  
- Nmap, Netdiscover, Pi Imager, SSH, UFW  
- Markdown (`.md`) for documentation  

---

## SUCCESS CRITERIA  
- All devices operational, hardened, and accessible securely  
- GitHub repo contains all configs, diagrams, and documentation  
- Lab is usable for future Red Team / Blue Team operations  
- Report is detailed enough to replicate or hand off  
- Identity milestone reached — Ghostroot’s digital soil is now seeded  

---

> **Note:** Maintain OPSEC. Internal IPs, MAC addresses, and identifiable details should be redacted or obfuscated in public-facing documentation.
