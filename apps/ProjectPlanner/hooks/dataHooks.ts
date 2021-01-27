import { useState, useEffect } from 'react'
import api from '../api'
import { TaskGroup as TaskGroupType, Board as BoardType, Task as TaskType } from '../types'

export const useBoards = (
  userId: number
): [BoardType[] | null, React.Dispatch<React.SetStateAction<BoardType[] | null>>] => {
  const [boards, setBoards] = useState<BoardType[] | null>(null)

  useEffect(() => {
    api.boards.getBoards(userId).then((boards: BoardType[]) => {
      setBoards(boards)
    })
  }, [userId])

  return [boards, setBoards]
}

export const useBoard = (
  boardId: number
): [BoardType | null, React.Dispatch<React.SetStateAction<BoardType | null>>] => {
  const [board, setBoard] = useState<BoardType | null>(null)

  useEffect(() => {
    api.boards.getBoard(boardId).then((board: BoardType) => {
      setBoard(board)
    })
  }, [boardId])

  return [board, setBoard]
}

export const useTaskGroups = (
  boardId: number
): [TaskGroupType[] | null, React.Dispatch<React.SetStateAction<TaskGroupType[] | null>>] => {
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[] | null>(null)

  useEffect(() => {
    api.boards.getTaskGroups(boardId).then((taskGroup: TaskGroupType[]) => {
      setTaskGroups(taskGroup)
    })
  }, [boardId])

  return [taskGroups, setTaskGroups]
}

export const useTasks = (
  boardId: number
): [TaskType[] | null, React.Dispatch<React.SetStateAction<TaskType[] | null>>] => {
  const [tasks, setTasks] = useState<TaskType[] | null>(null)

  useEffect(() => {
    api.boards.getTasks(boardId).then((tasks: TaskType[]) => {
      setTasks(tasks)
    })
  }, [boardId])

  return [tasks, setTasks]
}

// const taskGroups = board?.taskGroups