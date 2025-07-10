const skills = [
  "Docker",
  "Nagios",
  "Elasticsearch",
  "Logstash",
  "Kibana",
  "Pingdom",
  "Kong",
  "GitLab",
  "VMWare",
  "Azure Active Directory",
  "SAML 2.0/Shibboleth",
  "iSCSI",
  "Windows Server",
  "CentOS",
  "DokuWiki",
  "JIRA",
  "Puppet",
  "SQL",
  "SNMP",
  "LDAP",
  "GVRP",
  "MPLS",
  "LLDP/Cisco Discovery Protocol",
  "802.1ax MLAG",
  "802.1x port security",
  "SD-WAN",
  "SD-LAN",
  "OpenSSL",
  "TomCat appplication server",
  "Java stacks",
  "BASH",
  "Python",
  "PHP",
  "SQL"
];

function sendEnterKey() {
const event = (type) => new KeyboardEvent(type, {
key: 'Enter',
code: 'Enter',
keyCode: 13,
which: 13,
bubbles: true
});

const target = document.activeElement;
target.dispatchEvent(event('keydown'));
target.dispatchEvent(event('keypress'));
target.dispatchEvent(event('keyup'));
}

async function enterSkills() {
const input = document.querySelector('input[id^="skills--skills"]');
if (!input) {
console.error("Skill input field not found.");
return;
}

for (const skill of skills) {
input.focus();

input.value = skill;
input.dispatchEvent(new Event('input', { bubbles: true }));

sendEnterKey();
await new Promise(res => setTimeout(res, 1000));

sendEnterKey();
await new Promise(res => setTimeout(res, 700));

input.focus();
for (let i = 0; i < 30; i++) {
const event = new KeyboardEvent('keydown', {
key: 'Backspace',
keyCode: 8,
which: 8,
bubbles: true
});
input.dispatchEvent(event);
}

input.dispatchEvent(new Event('input', { bubbles: true }));
await new Promise(res => setTimeout(res, 300));
console.log(`Entered: ${skill}`);
}

console.log("All skills entered.");
}

enterSkills();
