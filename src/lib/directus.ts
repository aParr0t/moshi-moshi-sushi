import { readItems, createDirectus, rest } from "@directus/sdk";

const baseUrl = process.env.API_URL || "http://localhost:8055";
const directus = createDirectus(baseUrl).with(rest());

export default directus;

function menuPageReducer(menuPage: any) {
  return {
    name: menuPage.Navn,
    subPages: menuPage.Undersider.map((subPage: any) => {
      return {
        name: subPage.item.Tittel,
        dishes: subPage.item.Matretter.map((dish: any) => {
          return {
            name: dish.Matretter_id.Navn,
            description: dish.Matretter_id.Beskrivelse,
            price: dish.Matretter_id.Pris,
          };
        }),
      };
    }),
  };
}

export async function getPages() {
  const fetchedPages = await directus.request(
    readItems("Meny_sider", {
      fields: [
        "Navn",
        {
          Undersider: [
            {
              item: [
                "Tittel",
                {
                  Matretter: [
                    {
                      Matretter_id: ["Navn", "Beskrivelse", "Pris"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  );

  return fetchedPages.map(menuPageReducer);
}

export async function getWorkingHours() {
  const fetchedWorkingHours = await directus.request(
    readItems("Aapningstider", {
      fields: ["Dag", "Start", "Slutt", "Stengt"],
    })
  );

  return fetchedWorkingHours.map((workingHour) => ({
    day: workingHour.Dag,
    open: workingHour.Start,
    close: workingHour.Slutt,
    isClosed: workingHour.Stengt,
  }));
}
