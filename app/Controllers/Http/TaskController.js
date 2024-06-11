'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index({ view }) {
    const tasks = await Task.all()
    return view.render('tasks.index', { tasks: tasks.toJSON() })
  }

  async create({ view }) {
    return view.render('tasks.create')
  }

  async store({ request, response, session }) {
    const task = new Task()
    task.title = request.input('title')
    task.description = request.input('description')
    await task.save()
    session.flash({ notification: 'Task created successfully!' })
    return response.redirect('/tasks')
  }

  async edit({ params, view }) {
    const task = await Task.find(params.id)
    return view.render('tasks.edit', { task: task.toJSON() })
  }

  async update({ params, request, response, session }) {
    const task = await Task.find(params.id)
    task.title = request.input('title')
    task.description = request.input('description')
    await task.save()
    session.flash({ notification: 'Task updated successfully!' })
    return response.redirect('/tasks')
  }

  async destroy({ params, response, session }) {
    const task = await Task.find(params.id)
    await task.delete()
    session.flash({ notification: 'Task deleted successfully!' })
    return response.redirect('/tasks')
  }
}

module.exports = TaskController