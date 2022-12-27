import {
  brands,
  products,
  profile,
  rutines,
  skins,
} from './footer.menu.config';

export type IColor = 'pink' | 'blue' | 'yellow';
export type IFooterConfig = {
  title: string;
  menus: Array<{
    title: string;
    color: IColor;
    items: Array<{
      label: string;
      path: string;
    }>;
  }>;
};
function itemsToMenu(items: {
  [key: string]: string;
}): Array<{ label: string; path: string }> {
  return Object.entries(items).map((item) => ({
    label: item[0],
    path: item[1],
  }));
}

export default <IFooterConfig> {
  title: 'Bubbles Skin Care',
  menus: [
    {
      title: 'Productos'.toUpperCase(),
      color: 'pink',
      items: itemsToMenu(products),
    },
    {
      title: 'Rutinas'.toUpperCase(),
      color: 'blue',
      items: itemsToMenu(rutines),
    },
    {
      title: 'Tipos de Piel'.toUpperCase(),
      color: 'yellow',
      items: itemsToMenu(skins),
    },
    {
      title: 'Marcas'.toUpperCase(),
      color: 'pink',
      items: itemsToMenu(brands),
    },
    {
      title: 'Perfil'.toUpperCase(),
      color: 'blue',
      items: itemsToMenu(profile),
    },
  ],
};
