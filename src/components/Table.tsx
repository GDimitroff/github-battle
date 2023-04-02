import * as React from 'react';
import { hashtag } from '../utils/icons';
import Tooltip from './Tooltip';

function MoreInfo({
  created_at,
  forked_count,
  language,
  updated_at,
  watchers,
  login,
}) {
  return (
    <ul className="tooltip stack">
      <li className="split">
        <span>By:</span> <span>{login}</span>
      </li>
      {language && (
        <li className="split">
          <span>Language:</span> <span>{language}</span>
        </li>
      )}
      <li className="split">
        <span>Created:</span>{' '}
        <span>{new Date(created_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Updated:</span>{' '}
        <span>{new Date(updated_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Watchers:</span>
        <span>{watchers.toLocaleString()}</span>
      </li>
      {forked_count && (
        <li className="split">
          <span>Forked:</span> <span>{forked_count.toLocaleString()}</span>
        </li>
      )}
    </ul>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: '5%' }}>{hashtag}</th>
        <th style={{ width: '50%' }}>Repository</th>
        <th style={{ width: '15%' }}>Stars</th>
        <th style={{ width: '15%' }}>Forks</th>
        <th style={{ width: '15%' }}>Open Issue</th>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
  created_at,
  updated_at,
  language,
  watchers,
}) {
  const { login, avatar_url, type } = owner;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Tooltip
          element={
            <MoreInfo
              created_at={created_at}
              language={language}
              updated_at={updated_at}
              watchers={watchers}
              type={type}
              login={login}
            />
          }
        >
          <div className="row gap-md">
            <img
              width={32}
              height={32}
              className="avatar"
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <a href={`https://github.com/${login}/${name}`} target="_blank">
              {name}
            </a>
          </div>
        </Tooltip>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

export default function Table({ repos }) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
}