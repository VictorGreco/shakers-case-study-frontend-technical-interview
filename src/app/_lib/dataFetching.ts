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

export const getCategories = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/categories`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

export const getSubcategories = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/subcategories`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch subcategories');
  }

  return res.json();
};

export const getSkills = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/skills`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch subcategories');
  }

  return res.json();
};

export const getIndustries = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/industries`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch industries');
  }

  return res.json();
};

export const getProjectDetails = async (id: string) => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/projects/${id}`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch single project');
  }

  return res.json();
};

export const getSpecialties = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch(`${process.env.PROJECTS_API_DOMAIN}/v1/specialties`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    next: { revalidate: 3600 }
  } );

  if (!res.ok) {
    throw new Error('Failed to fetch specialties');
  }

  return res.json();
};