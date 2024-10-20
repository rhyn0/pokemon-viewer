/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as berryBerryImport } from './routes/(berry)/berry'
import { Route as BerryFirmnessIndexImport } from './routes/berry_/firmness.index'
import { Route as berryBerryIndexImport } from './routes/(berry)/berry.index'
import { Route as BerryFirmnessFirmnessIdImport } from './routes/berry_/firmness.$firmnessId'
import { Route as berryBerryBerryIdImport } from './routes/(berry)/berry.$berryId'
import { Route as BerryflavorFlavorIndexImport } from './routes/berry_/(flavor)/flavor.index'
import { Route as pokemonPokemonCharacteristicIndexImport } from './routes/(pokemon)/pokemon_.characteristic/index'
import { Route as BerryFirmnessFirmnessIdModalImport } from './routes/berry_/firmness.$firmnessId_.modal'
import { Route as BerryflavorFlavorFlavorIdImport } from './routes/berry_/(flavor)/flavor.$flavorId'
import { Route as pokemonPokemonCharacteristicCharacteristicIdImport } from './routes/(pokemon)/pokemon_.characteristic/$characteristicId'
import { Route as pokemonabilityPokemonAbilityImport } from './routes/(pokemon)/(ability)/pokemon_/ability'
import { Route as pokemonabilityPokemonAbilityIndexImport } from './routes/(pokemon)/(ability)/pokemon_/ability.index'
import { Route as BerryflavorFlavorFlavorIdModalImport } from './routes/berry_/(flavor)/flavor.$flavorId_.modal'
import { Route as pokemonPokemonCharacteristicCharacteristicIdModalImport } from './routes/(pokemon)/pokemon_.characteristic/$characteristicId_.modal'
import { Route as pokemonabilityPokemonAbilityAbilityIdImport } from './routes/(pokemon)/(ability)/pokemon_/ability.$abilityId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const berryBerryRoute = berryBerryImport.update({
  path: '/berry',
  getParentRoute: () => rootRoute,
} as any)

const BerryFirmnessIndexRoute = BerryFirmnessIndexImport.update({
  path: '/berry/firmness/',
  getParentRoute: () => rootRoute,
} as any)

const berryBerryIndexRoute = berryBerryIndexImport.update({
  path: '/',
  getParentRoute: () => berryBerryRoute,
} as any)

const BerryFirmnessFirmnessIdRoute = BerryFirmnessFirmnessIdImport.update({
  path: '/berry/firmness/$firmnessId',
  getParentRoute: () => rootRoute,
} as any)

const berryBerryBerryIdRoute = berryBerryBerryIdImport.update({
  path: '/$berryId',
  getParentRoute: () => berryBerryRoute,
} as any)

const BerryflavorFlavorIndexRoute = BerryflavorFlavorIndexImport.update({
  path: '/berry/flavor/',
  getParentRoute: () => rootRoute,
} as any)

const pokemonPokemonCharacteristicIndexRoute =
  pokemonPokemonCharacteristicIndexImport.update({
    path: '/pokemon/characteristic/',
    getParentRoute: () => rootRoute,
  } as any)

const BerryFirmnessFirmnessIdModalRoute =
  BerryFirmnessFirmnessIdModalImport.update({
    path: '/berry/firmness/$firmnessId/modal',
    getParentRoute: () => rootRoute,
  } as any)

const BerryflavorFlavorFlavorIdRoute = BerryflavorFlavorFlavorIdImport.update({
  path: '/berry/flavor/$flavorId',
  getParentRoute: () => rootRoute,
} as any)

const pokemonPokemonCharacteristicCharacteristicIdRoute =
  pokemonPokemonCharacteristicCharacteristicIdImport.update({
    path: '/pokemon/characteristic/$characteristicId',
    getParentRoute: () => rootRoute,
  } as any)

const pokemonabilityPokemonAbilityRoute =
  pokemonabilityPokemonAbilityImport.update({
    path: '/pokemon/ability',
    getParentRoute: () => rootRoute,
  } as any)

const pokemonabilityPokemonAbilityIndexRoute =
  pokemonabilityPokemonAbilityIndexImport.update({
    path: '/',
    getParentRoute: () => pokemonabilityPokemonAbilityRoute,
  } as any)

const BerryflavorFlavorFlavorIdModalRoute =
  BerryflavorFlavorFlavorIdModalImport.update({
    path: '/berry/flavor/$flavorId/modal',
    getParentRoute: () => rootRoute,
  } as any)

const pokemonPokemonCharacteristicCharacteristicIdModalRoute =
  pokemonPokemonCharacteristicCharacteristicIdModalImport.update({
    path: '/pokemon/characteristic/$characteristicId/modal',
    getParentRoute: () => rootRoute,
  } as any)

const pokemonabilityPokemonAbilityAbilityIdRoute =
  pokemonabilityPokemonAbilityAbilityIdImport.update({
    path: '/$abilityId',
    getParentRoute: () => pokemonabilityPokemonAbilityRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(berry)/berry': {
      id: '/berry'
      path: '/berry'
      fullPath: '/berry'
      preLoaderRoute: typeof berryBerryImport
      parentRoute: typeof rootRoute
    }
    '/(berry)/berry/$berryId': {
      id: '/berry/$berryId'
      path: '/$berryId'
      fullPath: '/berry/$berryId'
      preLoaderRoute: typeof berryBerryBerryIdImport
      parentRoute: typeof berryBerryImport
    }
    '/berry/firmness/$firmnessId': {
      id: '/berry/firmness/$firmnessId'
      path: '/berry/firmness/$firmnessId'
      fullPath: '/berry/firmness/$firmnessId'
      preLoaderRoute: typeof BerryFirmnessFirmnessIdImport
      parentRoute: typeof rootRoute
    }
    '/(berry)/berry/': {
      id: '/berry/'
      path: '/'
      fullPath: '/berry/'
      preLoaderRoute: typeof berryBerryIndexImport
      parentRoute: typeof berryBerryImport
    }
    '/berry/firmness/': {
      id: '/berry/firmness/'
      path: '/berry/firmness'
      fullPath: '/berry/firmness'
      preLoaderRoute: typeof BerryFirmnessIndexImport
      parentRoute: typeof rootRoute
    }
    '/(pokemon)/(ability)/pokemon/ability': {
      id: '/pokemon/ability'
      path: '/pokemon/ability'
      fullPath: '/pokemon/ability'
      preLoaderRoute: typeof pokemonabilityPokemonAbilityImport
      parentRoute: typeof rootRoute
    }
    '/(pokemon)/pokemon/characteristic/$characteristicId': {
      id: '/pokemon/characteristic/$characteristicId'
      path: '/pokemon/characteristic/$characteristicId'
      fullPath: '/pokemon/characteristic/$characteristicId'
      preLoaderRoute: typeof pokemonPokemonCharacteristicCharacteristicIdImport
      parentRoute: typeof rootRoute
    }
    '/berry/(flavor)/flavor/$flavorId': {
      id: '/berry/flavor/$flavorId'
      path: '/berry/flavor/$flavorId'
      fullPath: '/berry/flavor/$flavorId'
      preLoaderRoute: typeof BerryflavorFlavorFlavorIdImport
      parentRoute: typeof rootRoute
    }
    '/berry/firmness/$firmnessId/modal': {
      id: '/berry/firmness/$firmnessId/modal'
      path: '/berry/firmness/$firmnessId/modal'
      fullPath: '/berry/firmness/$firmnessId/modal'
      preLoaderRoute: typeof BerryFirmnessFirmnessIdModalImport
      parentRoute: typeof rootRoute
    }
    '/(pokemon)/pokemon/characteristic/': {
      id: '/pokemon/characteristic/'
      path: '/pokemon/characteristic'
      fullPath: '/pokemon/characteristic'
      preLoaderRoute: typeof pokemonPokemonCharacteristicIndexImport
      parentRoute: typeof rootRoute
    }
    '/berry/(flavor)/flavor/': {
      id: '/berry/flavor/'
      path: '/berry/flavor'
      fullPath: '/berry/flavor'
      preLoaderRoute: typeof BerryflavorFlavorIndexImport
      parentRoute: typeof rootRoute
    }
    '/(pokemon)/(ability)/pokemon/ability/$abilityId': {
      id: '/pokemon/ability/$abilityId'
      path: '/$abilityId'
      fullPath: '/pokemon/ability/$abilityId'
      preLoaderRoute: typeof pokemonabilityPokemonAbilityAbilityIdImport
      parentRoute: typeof pokemonabilityPokemonAbilityImport
    }
    '/(pokemon)/pokemon/characteristic/$characteristicId/modal': {
      id: '/pokemon/characteristic/$characteristicId/modal'
      path: '/pokemon/characteristic/$characteristicId/modal'
      fullPath: '/pokemon/characteristic/$characteristicId/modal'
      preLoaderRoute: typeof pokemonPokemonCharacteristicCharacteristicIdModalImport
      parentRoute: typeof rootRoute
    }
    '/berry/(flavor)/flavor/$flavorId/modal': {
      id: '/berry/flavor/$flavorId/modal'
      path: '/berry/flavor/$flavorId/modal'
      fullPath: '/berry/flavor/$flavorId/modal'
      preLoaderRoute: typeof BerryflavorFlavorFlavorIdModalImport
      parentRoute: typeof rootRoute
    }
    '/(pokemon)/(ability)/pokemon/ability/': {
      id: '/pokemon/ability/'
      path: '/'
      fullPath: '/pokemon/ability/'
      preLoaderRoute: typeof pokemonabilityPokemonAbilityIndexImport
      parentRoute: typeof pokemonabilityPokemonAbilityImport
    }
  }
}

// Create and export the route tree

interface berryBerryRouteChildren {
  berryBerryBerryIdRoute: typeof berryBerryBerryIdRoute
  berryBerryIndexRoute: typeof berryBerryIndexRoute
}

const berryBerryRouteChildren: berryBerryRouteChildren = {
  berryBerryBerryIdRoute: berryBerryBerryIdRoute,
  berryBerryIndexRoute: berryBerryIndexRoute,
}

const berryBerryRouteWithChildren = berryBerryRoute._addFileChildren(
  berryBerryRouteChildren,
)

interface pokemonabilityPokemonAbilityRouteChildren {
  pokemonabilityPokemonAbilityAbilityIdRoute: typeof pokemonabilityPokemonAbilityAbilityIdRoute
  pokemonabilityPokemonAbilityIndexRoute: typeof pokemonabilityPokemonAbilityIndexRoute
}

const pokemonabilityPokemonAbilityRouteChildren: pokemonabilityPokemonAbilityRouteChildren =
  {
    pokemonabilityPokemonAbilityAbilityIdRoute:
      pokemonabilityPokemonAbilityAbilityIdRoute,
    pokemonabilityPokemonAbilityIndexRoute:
      pokemonabilityPokemonAbilityIndexRoute,
  }

const pokemonabilityPokemonAbilityRouteWithChildren =
  pokemonabilityPokemonAbilityRoute._addFileChildren(
    pokemonabilityPokemonAbilityRouteChildren,
  )

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/berry': typeof berryBerryRouteWithChildren
  '/berry/$berryId': typeof berryBerryBerryIdRoute
  '/berry/firmness/$firmnessId': typeof BerryFirmnessFirmnessIdRoute
  '/berry/': typeof berryBerryIndexRoute
  '/berry/firmness': typeof BerryFirmnessIndexRoute
  '/pokemon/ability': typeof pokemonabilityPokemonAbilityRouteWithChildren
  '/pokemon/characteristic/$characteristicId': typeof pokemonPokemonCharacteristicCharacteristicIdRoute
  '/berry/flavor/$flavorId': typeof BerryflavorFlavorFlavorIdRoute
  '/berry/firmness/$firmnessId/modal': typeof BerryFirmnessFirmnessIdModalRoute
  '/pokemon/characteristic': typeof pokemonPokemonCharacteristicIndexRoute
  '/berry/flavor': typeof BerryflavorFlavorIndexRoute
  '/pokemon/ability/$abilityId': typeof pokemonabilityPokemonAbilityAbilityIdRoute
  '/pokemon/characteristic/$characteristicId/modal': typeof pokemonPokemonCharacteristicCharacteristicIdModalRoute
  '/berry/flavor/$flavorId/modal': typeof BerryflavorFlavorFlavorIdModalRoute
  '/pokemon/ability/': typeof pokemonabilityPokemonAbilityIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/berry/$berryId': typeof berryBerryBerryIdRoute
  '/berry/firmness/$firmnessId': typeof BerryFirmnessFirmnessIdRoute
  '/berry': typeof berryBerryIndexRoute
  '/berry/firmness': typeof BerryFirmnessIndexRoute
  '/pokemon/characteristic/$characteristicId': typeof pokemonPokemonCharacteristicCharacteristicIdRoute
  '/berry/flavor/$flavorId': typeof BerryflavorFlavorFlavorIdRoute
  '/berry/firmness/$firmnessId/modal': typeof BerryFirmnessFirmnessIdModalRoute
  '/pokemon/characteristic': typeof pokemonPokemonCharacteristicIndexRoute
  '/berry/flavor': typeof BerryflavorFlavorIndexRoute
  '/pokemon/ability/$abilityId': typeof pokemonabilityPokemonAbilityAbilityIdRoute
  '/pokemon/characteristic/$characteristicId/modal': typeof pokemonPokemonCharacteristicCharacteristicIdModalRoute
  '/berry/flavor/$flavorId/modal': typeof BerryflavorFlavorFlavorIdModalRoute
  '/pokemon/ability': typeof pokemonabilityPokemonAbilityIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/berry': typeof berryBerryRouteWithChildren
  '/berry/$berryId': typeof berryBerryBerryIdRoute
  '/berry/firmness/$firmnessId': typeof BerryFirmnessFirmnessIdRoute
  '/berry/': typeof berryBerryIndexRoute
  '/berry/firmness/': typeof BerryFirmnessIndexRoute
  '/pokemon/ability': typeof pokemonabilityPokemonAbilityRouteWithChildren
  '/pokemon/characteristic/$characteristicId': typeof pokemonPokemonCharacteristicCharacteristicIdRoute
  '/berry/flavor/$flavorId': typeof BerryflavorFlavorFlavorIdRoute
  '/berry/firmness/$firmnessId/modal': typeof BerryFirmnessFirmnessIdModalRoute
  '/pokemon/characteristic/': typeof pokemonPokemonCharacteristicIndexRoute
  '/berry/flavor/': typeof BerryflavorFlavorIndexRoute
  '/pokemon/ability/$abilityId': typeof pokemonabilityPokemonAbilityAbilityIdRoute
  '/pokemon/characteristic/$characteristicId/modal': typeof pokemonPokemonCharacteristicCharacteristicIdModalRoute
  '/berry/flavor/$flavorId/modal': typeof BerryflavorFlavorFlavorIdModalRoute
  '/pokemon/ability/': typeof pokemonabilityPokemonAbilityIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/berry'
    | '/berry/$berryId'
    | '/berry/firmness/$firmnessId'
    | '/berry/'
    | '/berry/firmness'
    | '/pokemon/ability'
    | '/pokemon/characteristic/$characteristicId'
    | '/berry/flavor/$flavorId'
    | '/berry/firmness/$firmnessId/modal'
    | '/pokemon/characteristic'
    | '/berry/flavor'
    | '/pokemon/ability/$abilityId'
    | '/pokemon/characteristic/$characteristicId/modal'
    | '/berry/flavor/$flavorId/modal'
    | '/pokemon/ability/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/berry/$berryId'
    | '/berry/firmness/$firmnessId'
    | '/berry'
    | '/berry/firmness'
    | '/pokemon/characteristic/$characteristicId'
    | '/berry/flavor/$flavorId'
    | '/berry/firmness/$firmnessId/modal'
    | '/pokemon/characteristic'
    | '/berry/flavor'
    | '/pokemon/ability/$abilityId'
    | '/pokemon/characteristic/$characteristicId/modal'
    | '/berry/flavor/$flavorId/modal'
    | '/pokemon/ability'
  id:
    | '__root__'
    | '/'
    | '/berry'
    | '/berry/$berryId'
    | '/berry/firmness/$firmnessId'
    | '/berry/'
    | '/berry/firmness/'
    | '/pokemon/ability'
    | '/pokemon/characteristic/$characteristicId'
    | '/berry/flavor/$flavorId'
    | '/berry/firmness/$firmnessId/modal'
    | '/pokemon/characteristic/'
    | '/berry/flavor/'
    | '/pokemon/ability/$abilityId'
    | '/pokemon/characteristic/$characteristicId/modal'
    | '/berry/flavor/$flavorId/modal'
    | '/pokemon/ability/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  berryBerryRoute: typeof berryBerryRouteWithChildren
  BerryFirmnessFirmnessIdRoute: typeof BerryFirmnessFirmnessIdRoute
  BerryFirmnessIndexRoute: typeof BerryFirmnessIndexRoute
  pokemonabilityPokemonAbilityRoute: typeof pokemonabilityPokemonAbilityRouteWithChildren
  pokemonPokemonCharacteristicCharacteristicIdRoute: typeof pokemonPokemonCharacteristicCharacteristicIdRoute
  BerryflavorFlavorFlavorIdRoute: typeof BerryflavorFlavorFlavorIdRoute
  BerryFirmnessFirmnessIdModalRoute: typeof BerryFirmnessFirmnessIdModalRoute
  pokemonPokemonCharacteristicIndexRoute: typeof pokemonPokemonCharacteristicIndexRoute
  BerryflavorFlavorIndexRoute: typeof BerryflavorFlavorIndexRoute
  pokemonPokemonCharacteristicCharacteristicIdModalRoute: typeof pokemonPokemonCharacteristicCharacteristicIdModalRoute
  BerryflavorFlavorFlavorIdModalRoute: typeof BerryflavorFlavorFlavorIdModalRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  berryBerryRoute: berryBerryRouteWithChildren,
  BerryFirmnessFirmnessIdRoute: BerryFirmnessFirmnessIdRoute,
  BerryFirmnessIndexRoute: BerryFirmnessIndexRoute,
  pokemonabilityPokemonAbilityRoute:
    pokemonabilityPokemonAbilityRouteWithChildren,
  pokemonPokemonCharacteristicCharacteristicIdRoute:
    pokemonPokemonCharacteristicCharacteristicIdRoute,
  BerryflavorFlavorFlavorIdRoute: BerryflavorFlavorFlavorIdRoute,
  BerryFirmnessFirmnessIdModalRoute: BerryFirmnessFirmnessIdModalRoute,
  pokemonPokemonCharacteristicIndexRoute:
    pokemonPokemonCharacteristicIndexRoute,
  BerryflavorFlavorIndexRoute: BerryflavorFlavorIndexRoute,
  pokemonPokemonCharacteristicCharacteristicIdModalRoute:
    pokemonPokemonCharacteristicCharacteristicIdModalRoute,
  BerryflavorFlavorFlavorIdModalRoute: BerryflavorFlavorFlavorIdModalRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/berry",
        "/berry/firmness/$firmnessId",
        "/berry/firmness/",
        "/pokemon/ability",
        "/pokemon/characteristic/$characteristicId",
        "/berry/flavor/$flavorId",
        "/berry/firmness/$firmnessId/modal",
        "/pokemon/characteristic/",
        "/berry/flavor/",
        "/pokemon/characteristic/$characteristicId/modal",
        "/berry/flavor/$flavorId/modal"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/berry": {
      "filePath": "(berry)/berry.tsx",
      "children": [
        "/berry/$berryId",
        "/berry/"
      ]
    },
    "/berry/$berryId": {
      "filePath": "(berry)/berry.$berryId.tsx",
      "parent": "/berry"
    },
    "/berry/firmness/$firmnessId": {
      "filePath": "berry_/firmness.$firmnessId.tsx"
    },
    "/berry/": {
      "filePath": "(berry)/berry.index.tsx",
      "parent": "/berry"
    },
    "/berry/firmness/": {
      "filePath": "berry_/firmness.index.tsx"
    },
    "/pokemon/ability": {
      "filePath": "(pokemon)/(ability)/pokemon_/ability.tsx",
      "children": [
        "/pokemon/ability/$abilityId",
        "/pokemon/ability/"
      ]
    },
    "/pokemon/characteristic/$characteristicId": {
      "filePath": "(pokemon)/pokemon_.characteristic/$characteristicId.tsx"
    },
    "/berry/flavor/$flavorId": {
      "filePath": "berry_/(flavor)/flavor.$flavorId.tsx"
    },
    "/berry/firmness/$firmnessId/modal": {
      "filePath": "berry_/firmness.$firmnessId_.modal.tsx"
    },
    "/pokemon/characteristic/": {
      "filePath": "(pokemon)/pokemon_.characteristic/index.tsx"
    },
    "/berry/flavor/": {
      "filePath": "berry_/(flavor)/flavor.index.tsx"
    },
    "/pokemon/ability/$abilityId": {
      "filePath": "(pokemon)/(ability)/pokemon_/ability.$abilityId.tsx",
      "parent": "/pokemon/ability"
    },
    "/pokemon/characteristic/$characteristicId/modal": {
      "filePath": "(pokemon)/pokemon_.characteristic/$characteristicId_.modal.tsx"
    },
    "/berry/flavor/$flavorId/modal": {
      "filePath": "berry_/(flavor)/flavor.$flavorId_.modal.tsx"
    },
    "/pokemon/ability/": {
      "filePath": "(pokemon)/(ability)/pokemon_/ability.index.tsx",
      "parent": "/pokemon/ability"
    }
  }
}
ROUTE_MANIFEST_END */
