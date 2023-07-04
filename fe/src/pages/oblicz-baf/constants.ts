export type IndicatorField = {
  id: string
  label: string
  description: string
  indicator: number
}

export type IndicatorGroup = {
  id: string
  label: string
  color: string
  fields: IndicatorField[]
}

export const indicators: IndicatorGroup[] = [
  {
    id: 'sealedFields',
    label: 'Powierzchnie szczelne',
    color: '#424B5A',
    fields: [
      {
        id: 'asphalt',
        label: 'Asfalt',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'concrete',
        label: 'Beton',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'stone',
        label: 'Kamień',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      }
    ]
  },
  {
    id: 'semiSealedFields',
    label: 'Powierzchnie półprzepuszczalne',
    color: '#A65E47',
    fields: [
      {
        id: 'gravel',
        label: 'Żwir',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'concreteOpenworkSlab',
        label: 'Płyta ażurowa betonowa',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'resinCombinedAggregate',
        label: 'Kruszywa łączone żywicą',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'otherBulkMaterials',
        label: 'Inne materiały sypkie',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      }
    ]
  },
  {
    id: 'perforatedFields',
    label: 'Powierzchnie perforowane',
    color: '#FF9C6E',
    fields: [
      {
        id: 'mineralResinPaving',
        label: 'Nawierzchnia mineralno-żywiczna',
        description: 'Lorem ipsum',
        indicator: 0.3
      },
      {
        id: 'thistlePavingWithExpansionSpaces',
        label: 'Kostka brukowa z przestrzeniami dylatacyjnymi',
        description: 'Lorem ipsum',
        indicator: 0.3
      }
    ]
  },
  {
    id: 'permeableFields',
    label: 'Powierzchnie przepuszczalne',
    color: '#40A9FF',
    fields: [
      {
        id: 'geogrid',
        label: 'Geokrata (geosiatka komórkowa)',
        description: 'Lorem ipsum dolor sit',
        indicator: 1
      }
    ]
  },
  {
    id: 'bioDiverseFields',
    label: 'Powierzchnie bio-różnorodne',
    color: '#BACA40',
    fields: [
      {
        id: 'development',
        label: 'Zabudowa',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'tree',
        label: 'Drzewo (pow. odkryta pod koroną, m2)',
        description: 'Lorem ipsum dolor sit',
        indicator: 1
      },
      {
        id: 'shrub',
        label: 'Krzew (pow. odkryta pod krzewem, m2)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'flowerMeadow',
        label: 'Łąka kwietna',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'grass',
        label: 'Trawa (murawa)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.3
      },
      {
        id: 'greenRoofs',
        label: 'Dachy zielone',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'greenWalls',
        label: 'Ściany zielone',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'climbingPlants',
        label: 'Rośliny pnące (na 1m2 powierzchni)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'rainGarden',
        label: 'Ogrody deszczowe',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      }
    ]
  }
]

export const initialState = indicators.reduce((previousValue, currentValue) => {
  return {
    ...previousValue,
    ...currentValue.fields.reduce((innerPrev, innerCurr) => {
      return {
        ...innerPrev,
        [innerCurr.id]: ''
      }
    }, {})
  }
}, {})
