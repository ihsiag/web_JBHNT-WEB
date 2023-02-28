import os
import csv

path_here = os.getcwd()
path_csv = os.path.join(path_here,"projectList.csv")

with open(path_csv,"r") as csvFile:
  reader = csv.reader(csvFile)
  for row in reader:
    newFolderName = row[0]
    newFolderPath = os.path.join(path_here,newFolderName)
    if(os.path.exists(newFolderPath) == False):
      os.makedirs(newFolderPath)
      newFileName = ".gitkeep"
      newFilePath = os.path.join(newFolderPath,newFileName)
      with open(newFilePath,"w") as gitkeepFile:
        gitkeepFile.write("")
      newFolderName = "img"
      newFolderPath = os.path.join(newFolderPath,newFolderName)
      if(os.path.exists(newFolderPath) == False):
        os.makedirs(newFolderPath)
        newFileName = ".gitkeep"
        newFilePath = os.path.join(newFolderPath,newFileName)
        with open(newFilePath,"w") as gitkeepFile:
          gitkeepFile.write("")
