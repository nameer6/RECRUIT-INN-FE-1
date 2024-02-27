export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { script, language } = req.body;

        const response = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                script: script,
                language: language,
                versionIndex: "18",
                stdin: "",
                clientId: "e0c1d57f610bd04b4a9ea83cb813ddbb",
                clientSecret: "f496672d94442292c54ac60e1501c1f801ddd2245d541c09b74cfcedf0488d40"
            }),
        });

        const data = await response.json();

        // Send back the response to the client
        res.status(200).json(data);
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}