import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function LearnRouting() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch(`http://localhost:8080/api/`)
			.then(res => res.text())
			.then(text => {
				setMessage(text);
			});
	})

	return (
		<div className="learn-routing">
			<Head>
				<title>Routed to this page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="learn-routing-main">
				<h1>I think this should work...</h1>
				{
					message &&
					<p>
						{`I got a message: ${message}`}
					</p>
				}
			</main>
		</div>
	);
}