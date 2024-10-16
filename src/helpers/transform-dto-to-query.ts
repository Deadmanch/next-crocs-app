/* eslint-disable @typescript-eslint/no-explicit-any */
type QueryString = Record<string, string>

export const transformDtoToQuery = <T extends Record<string, any>>(dto: T): QueryString => {
  const query: QueryString = {}

  Object.keys(dto).forEach((key) => {
    const value = dto[key]

    if (Array.isArray(value)) {
      // Если значение — массив, преобразуем его в строку через запятую
      query[key] = value.join(',')
    } else if (value !== undefined && value !== null) {
      // Преобразуем любое другое значение в строку
      query[key] = String(value)
    }
  })

  return query
}
