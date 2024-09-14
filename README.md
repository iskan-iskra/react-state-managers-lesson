# React State Managers lesson

## Версии

- node: 20.11.1
- npm: 10.2.4

## Команды

### установить зависимости

```
npm install
```

### запустить локально проект

```
npm run dev
```

### собрать билд проекта

```
npm run build
```

## Стек

- vite
- JavaScript
- React v.18
- React Router DOM v.6
- React Bootstrap
- Redux
- Zustand
- Mobx

## Тема урока

- Концепция State Manager (store)
- связка useContext + useReducer
- реализация через useSyncExternalStore
- Redux (имутабельный Store)
- Zustand (имутабельный Store)
- MobX (мутабельный Store)

## Структура

### UI компоненты (компоненты для отображения)

Виджет Шапки сайта с навигацией и переключением темы
Виджеты работы со списком TODO с разными подходами
Полный CRUD TODO

### Архитектура проекта

- components - ui компоненты (глупые, без логики)
- widjets - полноценные логические компоненты
- use - все пользовательские хуки (Hook)
- store - все менеджеры состояний
- context - все контексты (шины)
- reducers - все редкуторы (инкапсулированая логика)
- router - реализация маршрутизации через React-Router-DOM
- pages - все компоненты-страницы
- const - все статичные данные переиспользуемые в проекте
- layout - макеты/шаблоны (главный макет)
- hoc - компоненты высшего порядка (high order components)

Использование import/export через Public API (index.js файл для сборки всех частей директории)

Подключение к html реализовано через файл main.jsx
