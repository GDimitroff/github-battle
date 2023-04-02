import * as React from 'react';
import { fetchPopularRepos } from '../utils/api';
import Table from './Table';

interface PopularProps {}

interface PopularState {
  selectedLanguage: string;
  repos: any[] | null;
  error: string | null;
}

export default class Popular extends React.Component<
  PopularProps,
  PopularState
> {
  constructor(props: PopularProps) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (selectedLanguage: string) => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    fetchPopularRepos(selectedLanguage)
      .then((repos) =>
        this.setState({
          repos,
          error: null,
        })
      )
      .catch((error) => {
        console.warn('Error fetching repos: ', error);

        this.setState({
          error: 'There was an error fetching the repositories',
        });
      });
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Popular</h1>
          <LanguagesSelect
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
        </div>

        {error && <p className="text-center error">{error}</p>}
        {repos && <Table repos={repos} />}
      </main>
    );
  }
}

interface LanguagesSelectProps {
  selected: string;
  onUpdateLanguage: (selectedLanguage: string) => void;
}

function LanguagesSelect({ selected, onUpdateLanguage }: LanguagesSelectProps) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <select onChange={(e) => onUpdateLanguage(e.target.value)} value={selected}>
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}