import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll({
      atributes: ["id", "name", "priority", "description", "deliverydate"],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProject(req, res) {
  const { name, priority, description, deliveryDate } = req.body;

  try {
    // Obtener el último proyecto para determinar el siguiente ID
    const lastProject = await Project.findOne({
      order: [['id', 'DESC']],
    });

    // Calcular el siguiente ID
    const nextId = lastProject ? lastProject.id + 1 : 1;

    // Crear el nuevo proyecto con el ID calculado
    let newProject = await Project.create(
      {
        id: nextId,
        name,
        priority,
        description,
        deliveryDate: new Date(deliveryDate).getTime(),
      },
      {
        fields: ["id", "name", "priority", "description", "deliverydate"],
      }
    );

    return res.json(newProject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        projectId: id,
      },
    });
    await Project.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getProjectTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectId", "name", "done"],
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}


export async function getProjectsByPriority(req, res) {
  const priority = req.params.priority;

  try {
    const projects = await Project.findAll({
      where: { priority },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
