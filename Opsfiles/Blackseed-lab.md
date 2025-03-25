Ghostroot Mission 01: BLACKSEED.LAB

Codename: BLACKSEED.LAB
Operator: Ghostroot // ARCANA.NODE
Track: Infrastructure & Recon // Red Initiate
Deadline: 25 April 2025
Time Budget: ~7-10 hours/week


---

Objective:

Establish a fully functioning local hacker lab using your Raspberry Pi devices and internal network. Document the entire process and decisions in a blog-style GitHub repository. This is the root infrastructure that future missions will grow from.


---

Scope & Deliverables:

Phase 1: Design & Layout

Map out your devices (Pi 5, Pi Zero 2 Ws, etc.) and roles (e.g. attack node, web server, C2 system, logging).

Define network topology (subnets, isolation, SSH access, etc.)

Decide OS + tools for each device.


Deliverable:
/docs/architecture.md — your lab diagram and node roles.


---

Phase 2: Setup & Hardening

Flash OS images and configure SSH/VNC.

Assign static IPs, hostname conventions.

Harden devices: SSH keys, firewall, limited user perms.

Create secure access point from your main device.


Deliverable:
/setup/raspi-hardening.md — each device’s setup steps and security configs.


---

Phase 3: Internal Services

Deploy 1-2 core services (e.g. Pi-hole, Kali VM, web server, C2 server stub).

Make sure communication between nodes works securely.

Test and verify internal ops.


Deliverable:
/services/README.md — list of services, config summaries, and access notes.


---

Phase 4: Documentation

Commit all configs, scripts, and diagrams to GitHub.

Write a blog-style report on the mission.

Include lessons learned and what’s next.


Deliverable:
/blog/blackseed_lab_report.md — your full Ghostroot mission log.


---

Suggested Tools:

VIM (config editing)

Git/GitHub CLI

Draw.io or Excalidraw for diagrams

Nmap, Netdiscover, SSH, UFW, Pi Imager

Markdown for all reporting



---

Success Criteria:

Devices are operational, secure, and documented

Repo is public (or private, but complete)

Your write-up could guide another Ghostroot through building their own lab

You feel like you planted the first real flag

