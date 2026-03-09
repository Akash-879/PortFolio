const https = require('https');

const options = {
    hostname: 'api.github.com',
    path: '/repos/Akash-879/PortFolio/actions/runs',
    headers: {
        'User-Agent': 'Node.js'
    }
};

https.get(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const json = JSON.parse(data);
        if (json.workflow_runs && json.workflow_runs.length > 0) {
            const latestRun = json.workflow_runs[0];
            console.log(`Latest Run ID: ${latestRun.id}`);
            console.log(`Status: ${latestRun.status}`);
            console.log(`Conclusion: ${latestRun.conclusion}`);

            // Fetch jobs for this run
            const jobsOptions = {
                hostname: 'api.github.com',
                path: `/repos/Akash-879/PortFolio/actions/runs/${latestRun.id}/jobs`,
                headers: {
                    'User-Agent': 'Node.js'
                }
            };

            https.get(jobsOptions, (jobsRes) => {
                let jobsData = '';
                jobsRes.on('data', (chunk) => jobsData += chunk);
                jobsRes.on('end', () => {
                    const jobsJson = JSON.parse(jobsData);
                    if (jobsJson.jobs) {
                        jobsJson.jobs.forEach(job => {
                            if (job.conclusion === 'failure') {
                                console.log(`\nFailed Job: ${job.name}`);
                                job.steps.forEach(step => {
                                    if (step.conclusion === 'failure') {
                                        console.log(`  Failed Step: ${step.name}`);
                                    }
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});
