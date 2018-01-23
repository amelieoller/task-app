class Api::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]
  def index
    render json: Task.all
  end

  def show
    render json: @task
  end

  def create
    task = Task.new(task_params)
    if params[:project_name] != ''
      task.create_project(name: params[:project_name])
    end

    if task.save
      render json: task
    else
      render json: { message: task.errors }, status: 400
    end
  end

  def destroy
    if @task.destroy
      render json: {message: "Successfully deleted!"}, status: 204
    else
      render json: { message: 'Unable to delete' }, status: 400
    end    
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: { message: @task.errors }, status: 400
    end
  end

  private
    def task_params
      params.permit(:name, :completed, :project_id, :time, :position, :priority)
    end

    def set_task
      @task = Task.find_by(id: params[:id])
    end

end