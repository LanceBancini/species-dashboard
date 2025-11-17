import { ThemeConfig, themes, popoverStyles } from './themes';

export { popoverStyles, getThemes };

function getThemes(): ThemeConfig[] {
  return themes;
}

export function getDefaultTheme(): ThemeConfig {
  return themes.find((theme) => theme.name === 'Dark') || themes[0];
}

export function getThemeByName(name: string): ThemeConfig | undefined {
  return themes.find((theme) => theme.name === name);
}
