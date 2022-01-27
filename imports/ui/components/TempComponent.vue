<template>
  <div id="some-id" class="my-class">
    <v-card class="mb-5">
      <v-card-text>
        <form @submit.prevent="saveNewItem">
          <v-container>
            <v-row align="center">
              <v-col>
                <v-text-field
                  id="item-name"
                  v-model="newItem.name"
                  label="name"
                />
              </v-col>
              <v-col>
                <v-text-field
                  id="item-name"
                  v-model="newItem.price"
                  label="price"
                />
              </v-col>
              <v-col>
                <v-btn color="primary" type="submit">Save</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, idx) in items" :key="idx">
            <v-list-item-content two-line>
              <v-list-item-title>
                ${{ item.price }} - {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item._id }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeItem(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Items } from '../../api/collections/Items';
import { Meteor } from 'meteor/meteor';
export default {
  data() {
    return {
      newItem: { name: '', price: null },
    };
  },
  computed: {
    myComputed() {
      let undef = 4;
      return undef;
    },
  },
  methods: {
    saveNewItem() {
      Meteor.call('items.insert', this.newItem, (error, result) => {
        if (error) {
          console.error('something went wrong', error);
        } else {
          console.info(result);
          this.newItem = {
            name: '',
            price: null,
          };
        }
      });
    },
    removeItem(item) {
      Meteor.call('items.remove', item, (error, result) => {
        if (error) {
          console.error('something went wrong', error);
        } else {
          console.info(result);
        }
      });
    },
  },
  meteor: {
    $subscribe: {
      Items: [],
    },
    items() {
      return Items.find({}).fetch();
    },
  },
};
</script>

<style lang="css" scoped></style>
