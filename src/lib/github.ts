import { stats as fallbackStats } from './site';

const GITHUB_USERNAME = 'NaviTheCoderboi';
const GITHUB_USER_API = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

export interface GitHubStats {
	repos: number;
	stars: number;
	followers: number;
}

export const fetchGitHubStats = async (): Promise<GitHubStats> => {
	try {
		const [userRes, reposRes] = await Promise.all([
			fetch(GITHUB_USER_API, {
				headers: { Accept: 'application/vnd.github.v3+json' }
			}),
			fetch(GITHUB_REPOS_API, {
				headers: { Accept: 'application/vnd.github.v3+json' }
			})
		]);

		if (!userRes.ok || !reposRes.ok) {
			console.warn(
				`GitHub API error: user=${userRes.status}, repos=${reposRes.status}. Using fallback stats.`
			);
			return { ...fallbackStats };
		}

		const user = await userRes.json();
		const repos: { stargazers_count: number }[] = await reposRes.json();

		const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

		return {
			repos: user.public_repos ?? fallbackStats.repos,
			stars: totalStars,
			followers: user.followers ?? fallbackStats.followers
		};
	} catch (err) {
		console.warn('Failed to fetch GitHub stats:', err);
		return { ...fallbackStats };
	}
};
