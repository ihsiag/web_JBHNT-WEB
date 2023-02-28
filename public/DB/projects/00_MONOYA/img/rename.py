import os

path_here = os.getcwd()
fileNames = os.listdir(path_here)

head = "monoya_web_studio"
allowedExtList = [".png",".jpg"]

i = 0
for fileName in fileNames:
  filePath = os.path.join(path_here,fileName)
  if os.path.isfile(filePath):
    name, ext = os.path.splitext(filePath)
    if(ext in allowedExtList):
      before = name + ext
      after = head + "_" +str(i).zfill(3) + ext
      print(" -- ",before,">>> ",after)
      # os.rename(before,after)
      i+=1
    else:
      print(filePath, "is not allowed because of its extention : ",ext)
  else:
    print(filePath,"is not allowed because of its format")