'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers', 
      [
        {
        name: 'Burger 1',
        devoured: false,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
        },
        {
        name: 'Burger 2',
        devoured: true,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
        },
        {
        name: 'Burger 3',
        devoured: false,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
