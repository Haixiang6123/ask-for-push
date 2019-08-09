const fs = require('fs')
const info = require('./info')

let template = fs.readFileSync('./template.md', 'utf-8')

// From
template = template.replace(/\{from\}/g, info.from)
// Team
template = template.replace(/\{team\}/g, info.team)
// Jobs
template = template.replace(/\{jobs\}/g, info.jobs.join(', '))

console.log(template)
