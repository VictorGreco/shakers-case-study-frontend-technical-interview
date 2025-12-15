import { cache } from 'react';

export const getAccessToken = cache(async () => {
  console.log("Fetching new access token...");

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/auth/login`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: process.env.CLIENT_USER,
      password: process.env.CLIENT_PASSWORD
    })
  });

  if (!res.ok) {
    throw new Error('Failed to authenticate');
  }

  const { access_token } = await res.json();
  return access_token;
});

export const getProjects = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/projects`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
};