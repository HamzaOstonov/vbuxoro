<template>
  <v-navigation-drawer clipped permanent app>
    <v-list>
      <div v-for="(link, i) in links" :key="i">
        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-title v-text="link.text" />
        </v-list-item>

        <v-list-group v-else :key="link.text" no-action>
          <!--  -->
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item v-for="sublink in link.subLinks" :to="sublink.to" :key="sublink.text">
            <v-list-item-title v-text="sublink.text" />
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    links: [
      {
        to: "/zakaz",
        icon: "mdi-view-dashboard",
        text: "Заказлар"
      },
      {
        icon: "mdi-tennis",
        text: "Справочник",
        subLinks: [
          {
            text: "Товарлар",
            to: "/tovar"
          },
          {
            text: "Артикул",
            to: "/artikul"
          },
          {
            text: "Клиент",
            to: "/client"
          },
          {
            text: "Ходимлар",
            to: "/user"
          }
        ]
      },
      {
        to: "/tournaments",
        icon: "mdi-trophy",
        text: "Паролни узгартириш"
      }
    ],
    admins: [
      ["Management", "people_outline"],
      ["Settings", "settings"]
    ],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ],

    menuItems: [
      { icon: "date_range", title: "Заказлар", link: "/calendar" },
      //{icon: 'person', title: 'Profile', link: '/profile'},
      {
        icon: "notifications",
        title: "Notifications",
        badge: 4,
        link: "/notification"
      }
    ]
  })
};
</script>
