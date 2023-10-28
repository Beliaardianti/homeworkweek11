const express = require('express');
const app = express();
const request = require('supertest');
const db = require('../models/todos'); 

describe('API Endpoint Testing', () => {
  beforeAll(async () => {
    await db.sequelize.sync();
  });

  afterAll(async () => {
  
    await db.sequelize.close();
  });

  it('should list all todos', async () => {
    const response = await request(app).get('/api/todos');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0); 
  });

  it(' get todo by ID', async () => {
    const response = await request(app).get('/api/todos/1'); 
    expect(response.status).toBe(404); 
  });

  it(' create a todo', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({ title: 'Test Todo' }); 
    expect(response.status).toBe(201);
  });

  it('should delete a todo', async () => {
    const response = await request(app).delete('/api/todos/1'); 
    expect(response.status).toBe(404); 
  });
});
