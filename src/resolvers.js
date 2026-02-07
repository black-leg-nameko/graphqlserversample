export const resolvers = {
    Query: {
        me: () => ({
            id: "u123",
            name: "山田太郎",
            courses: [
                {
                    id: "c1",
                    title: "データ構造とアルゴリズム",
                    assignments: [
                        {id: "a1", title: "レポート1", due: "2026-02-10", submitted: false}
                    ]
                }
            ],
            library: {
                loans: [
                    {title: "機械学習入門", due: "2026-02-15"}
                ]
            }
        }),

        cafeteria: () => ({
            menu: ["カレー", "唐揚げ定食", "うどん"],
            congestion: 42
        })
    }
};
