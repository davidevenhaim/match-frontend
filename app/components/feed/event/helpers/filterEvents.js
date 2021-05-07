const today = new Date();

export function filterEvents(events, searchFilters) {
  if (!searchFilters.sportFilters.length) {
    return events;
  }
  const filteredEvents = events.filter(
    (event) => searchFilters.sportFilters.indexOf(event.sport) >= 0
  );

  return filteredEvents;
}
