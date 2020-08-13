import React, { useState, FormEvent, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';

import { useFetch, FetchStatus } from '../index';

import * as S from './stories.styles';

function ListRepos() {
  const [user, setUser] = useState('viczhuravlev');

  const { status, data } = useFetch<
    { message: string } | { name: string; description: string }[]
  >(`https://api.github.com/users/${user}/repos`, undefined, 10000);

  let repos: ReactNode | null = null;

  switch (status) {
    case 'loading': {
      repos = 'Loading ...';

      break;
    }

    case 'loaded': {
      if (Array.isArray(data)) {
        repos = (
          <ul>
            {data.map((item) => (
              <li>
                <pre>
                  {JSON.stringify(
                    { name: item.name, description: item.description },
                    null,
                    2
                  )}
                </pre>
              </li>
            ))}
          </ul>
        );
      } else if (data?.message) {
        repos = data.message;
      }

      break;
    }

    case 'error':
    case 'notLoaded':
    default: {
      break;
    }
  }

  return (
    <div>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setUser(event.target.search.value);
        }}
      >
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search repos"
          defaultValue={user}
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {repos}
    </div>
  );
}

storiesOf('Hooks/useFetch', module)
  .add('Default', () => (
    <>
      <S.H2>useFetch</S.H2>
      <S.Paragraph>
        This hook is intended for queries with a built-in caching mechanism.
      </S.Paragraph>

      <S.H4>Params:</S.H4>
      <S.Info>
        <span>
          <b>url</b> - address
        </span>
        <span>
          <b>requestParams</b> - optional object for classic fetch configuration
          fetch
        </span>
        <span>
          <b>cacheTime</b> - cache lifetime in ms
        </span>
      </S.Info>
      <S.H4>Result:</S.H4>
      <S.Info>
        <span>
          <b>data</b> - your data
        </span>
        <span>
          <b>error</b> - info about error
        </span>
        <span>
          <b>status</b> - {Object.keys(FetchStatus).join(' / ')}
        </span>
        <span>
          <b>fetchData</b> - in case you need to make a request inside a
          component with the same parameters
        </span>
      </S.Info>

      <S.Hr />

      <S.H3>How to use?</S.H3>

      <S.H4>Simple</S.H4>
      <S.Paragraph>This example shows how to make a GET request.</S.Paragraph>
      <S.Pre>
        const
        {` ${String.fromCharCode(123)} `}
        status, data
        {` ${String.fromCharCode(125)} `}= useFetch(YOUR_URL);
      </S.Pre>

      <S.H4>Advanced</S.H4>
      <S.Paragraph>
        This example shows how to make a GET request to the github site to get
        all the repositories of the specified user and store and return this
        result from the cache for 10 seconds.
      </S.Paragraph>
      <S.Pre>
        const
        {` ${String.fromCharCode(123)} `}
        status, data, error, fetchData
        {` ${String.fromCharCode(125)} `}=
        useFetch(https://api.github.com/users/viczhuravlev/repos,
        {` ${JSON.stringify(
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          },
          null,
          2
        )}`}
        , 10000);
      </S.Pre>
    </>
  ))
  .add('Example', () => (
    <>
      <S.H3>
        The example of a component for finding all repositories of the specified
        user.
      </S.H3>
      <S.Paragraph>
        Enter username from github and you will see a list of all his
        repositories.
      </S.Paragraph>
      <ListRepos />
    </>
  ));
