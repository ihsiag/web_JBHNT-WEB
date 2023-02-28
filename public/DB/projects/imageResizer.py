
#--------------------------------------------------------------------------
#
#IMPORTANT
#PLEASE OPEN FROM "FOLDER" AND FOLLOW THIS "File" > "Save Workspace As..."
#
#by GAISHI KUDO 
#19 JAN 2023
#
#--------------------------------------------------------------------------


import os
from PIL import Image
import math

def main():
  path_here = os.getcwd()
  projectFolderNames = os.listdir(path_here)
  doProcess = True #Need Check and toggle to True

  debugCounter = 0

  if(projectFolderNames):
      for projectFolderName in projectFolderNames:
        if(os.path.isdir(projectFolderName)):
          mediaFolderNames = os.listdir(path_here+"/"+projectFolderName)
          for mediaFolderName in mediaFolderNames:
            if(mediaFolderName == "img"):
              imgNames = os.listdir(path_here+"/"+projectFolderName + "/" + mediaFolderName)
              for imgName in imgNames:
                name,ext = os.path.splitext(imgName)
                if(ext == ".png" or ext == ".jpg" or ext == ".jpeg" or ext ==".JPG"):
                  imgResizer(path_here + "/" + projectFolderName + "/" + mediaFolderName + "/" + imgName,doProcess)
                  debugCounter += 1
  print(debugCounter)

def imgResizer(_url,_doProcess):
  img = Image.open(_url)

  # minEdgeSize = 800
  horiEdgeSize = 1200
  aspectRatio = img.width/img.height
  if(img.width<=horiEdgeSize):
    print("image is right or smaller : ",_url,"-data :",img.width," x ",img.height)
  else:
    print("image is larger : ",_url,"-data :",img.width," x ",img.height)
    if img.width > img.height:
      print("----横長")
      # if(_doProcess):resized_img = img.resize((math.floor(minEdgeSize*aspectRatio),minEdgeSize))
      if(_doProcess):resized_img = img.resize((horiEdgeSize,math.floor(horiEdgeSize/aspectRatio)))
      
    elif img.height > img.width:
      print("----縦長")
      # if(_doProcess):resized_img = img.resize((minEdgeSize,math.floor(minEdgeSize/aspectRatio)))
      if(_doProcess):resized_img = img.resize((horiEdgeSize,math.floor(horiEdgeSize/aspectRatio)))
    else:
      print("----正方形")
      # if(_doProcess):resized_img = img.resize(minEdgeSize,minEdgeSize)
      if(_doProcess):resized_img = img.resize((horiEdgeSize,horiEdgeSize))
    
    if(_doProcess and resized_img):
      name,ext = os.path.splitext(_url)
      newFilePath =""
      if(img.mode == "RGBA"): 
        newFilePath = name + ".png"
      else:
        newFilePath = name +".jpg"
      os.remove(_url)
      resized_img.save(newFilePath)

if __name__ == '__main__':
  main()

