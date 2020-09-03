import { underhood, github, curator } from '../underhood';

export default function (str) {
  return str
    .replace(/{{underhood.name}}/g, underhood.name)
    .replace(/{{underhood.description}}/g, underhood.description)
    .replace(/{{github.user}}/g, github.user)
    .replace(/{{github.repo}}/g, github.repo)
    .replace(/{{curator.twitter}}/g, curator.twitter);
}
