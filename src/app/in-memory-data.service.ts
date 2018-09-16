import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {teamID: 1, teamName: 'Liverpool', players: [
        { playerID: 1, playerName: 'Mo Salah', position: 'forward'},
        { playerID: 2, playerName: 'Alisson Becker', position: 'goal keeper'},
        { playerID: 3, playerName: 'Sadio Mane', position: 'forward'},
        { playerID: 4, playerName: 'Robert Firmino', position: 'forward'},
        { playerID: 5, playerName: 'Naby Keita', position: 'midfield'},
        { playerID: 6, playerName: 'Alex Oxlade-Chamberlain', position: 'midfield'},
        { playerID: 7, playerName: 'Jordan Henderson', position: 'midfield'},
        { playerID: 8, playerName: 'Virgil Van Dijk', position: 'defender'},
        { playerID: 9, playerName: 'Joe Gomez', position: 'defender'},
        { playerID: 10, playerName: 'Andrew Robertson', position: 'defender'},
        { playerID: 11, playerName: 'Trent Alexander-Arnold', position: 'defender'},
      ]
      }
      , {teamID: 2, teamName: 'Chelsea', players: [
          { playerID: 1, playerName: 'Thibaut Courtois', position: 'goal keeper'},
          { playerID: 2, playerName: 'Cesar Azpilicueta', position: 'defender'},
          { playerID: 3, playerName: 'Andreas Christensen', position: 'defender'},
          { playerID: 4, playerName: 'Antonio Rudiger', position: 'defender'},
          { playerID: 5, playerName: 'Marcos Alonso', position: 'defender'},
          { playerID: 6, playerName: 'N’Golo Kante', position: 'midfield'},
          { playerID: 7, playerName: 'Jorginho', position: 'midfield'},
          { playerID: 8, playerName: 'Ruben Loftus-Cheek', position: 'midfield'},
          { playerID: 9, playerName: 'Willian', position: 'forward'},
          { playerID: 10, playerName: 'Alvaro Morata', position: 'forward'},
          { playerID: 11, playerName: 'Eden Hazard', position: 'forward'},
        ]
      }
      , {teamID: 3, teamName: 'Manchester United', players: [
          { playerID: 1, playerName: 'De Gea', position: 'goal keeper'},
          { playerID: 2, playerName: 'Valencia', position: 'defender'},
          { playerID: 3, playerName: 'Smalling', position: 'defender'},
          { playerID: 4, playerName: 'Linedlof', position: 'defender'},
          { playerID: 5, playerName: 'Young', position: 'defender'},
          { playerID: 6, playerName: 'Fred', position: 'midfield'},
          { playerID: 7, playerName: 'Matic', position: 'midfield'},
          { playerID: 8, playerName: 'Pogba', position: 'midfield'},
          { playerID: 9, playerName: 'Lukaku', position: 'forward'},
          { playerID: 10, playerName: 'Lingard', position: 'forward'},
          { playerID: 11, playerName: 'Sanchez', position: 'forward'},
        ]
      }
      , {teamID: 4, teamName: 'Manchester City', players: [
          { playerID: 1, playerName: 'Caballero', position: 'goal keeper'},
          { playerID: 2, playerName: 'Kolarov', position: 'defender'},
          { playerID: 3, playerName: 'Stones', position: 'defender'},
          { playerID: 4, playerName: 'Zabaleta', position: 'defender'},
          { playerID: 5, playerName: 'Fernandinho', position: 'defender'},
          { playerID: 6, playerName: 'Toure', position: 'midfield'},
          { playerID: 7, playerName: 'De Bruyne', position: 'midfield'},
          { playerID: 8, playerName: 'Silva', position: 'midfield'},
          { playerID: 9, playerName: 'Sane', position: 'forward'},
          { playerID: 10, playerName: 'Sterling', position: 'forward'},
          { playerID: 11, playerName: 'Aguero', position: 'forward'},
        ]
      }
      , {teamID: 5, teamName: 'Tottenham', players: [
          { playerID: 1, playerName: 'Lloris', position: 'goal keeper'},
          { playerID: 2, playerName: 'Trippier', position: 'defender'},
          { playerID: 3, playerName: 'AlderWeireld', position: 'defender'},
          { playerID: 4, playerName: 'Vertonghen', position: 'defender'},
          { playerID: 5, playerName: 'Rose', position: 'defender'},
          { playerID: 6, playerName: 'Dembele', position: 'midfield'},
          { playerID: 7, playerName: 'Dier', position: 'midfield'},
          { playerID: 8, playerName: 'Alli', position: 'midfield'},
          { playerID: 9, playerName: 'Eriksen', position: 'midfield'},
          { playerID: 10, playerName: 'Moura', position: 'forward'},
          { playerID: 11, playerName: 'Kane', position: 'forward'},
        ]
      }
    ];
    return {teams};
  }
}
