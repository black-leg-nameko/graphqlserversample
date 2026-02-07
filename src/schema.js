import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        me: Student
        today: TodaySummary
        cafeteria: CafeteriaInfo
    }

    type Student {
        id: ID!
        name: String!
        courses: [Course]
        library: LibraryStatus
    }

    type Course {
        id: ID!
        title: String!
        assignments: [Assignment]
    }

    type Assignment {
        id: ID!
        title: String!
        due: String!
        submitted: Boolean!
    }

    type LibraryStatus {
        loans: [Loan]
    }

    type Loan {
        title: String!
        due: String!
    }

    type TodaySummary {
        classes: [Course]
        deadlines: [Assignment]
    }

    type CafeteriaInfo {
        menu: [String]
        congestino: Int
    }
`;
