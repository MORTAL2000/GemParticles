# GemParticles

Behold, my ability to screw up code at its finest. It also happens to be a flexible core-profile compliant OpenGL particle engine I used to create various visual effects and learning 3D concepts. Big thanks to [Mr. Lariviere](https://github.com/larivierec) for the help!

NOTE(s):
* [2018/11/05] None of the following stats are using multi-threading. I might implement threaded stages in the system's pipeline. WIP
* [2018/11/05] I'm currently working on GPU particles with Curl noise...

 Here are some highlights that I managed to create with this system. Please note that my system at the time of taking those screenshots had a i5-3570k CPU and Gefore GTX 660 GPU.

__Lit particles *or* particles with 200 dynamic cpu lights__
![lit particles or welding sparkles](https://github.com/frtru/GemParticles/blob/dev-master/gifs_and_screenshots/lit_particles.gif)

__500000 cpu particles attracted toward a location with hot and cold colors__
<img src="https://github.com/frtru/GemParticles/blob/dev-master/gifs_and_screenshots/attractor_1_cropped.gif" width="434" height="250">        <img src="https://github.com/frtru/GemParticles/blob/dev-master/gifs_and_screenshots/attractor_2_cropped.gif" width="434" height="250">

__and some rain... (1 million cpu particles with a steady 50 FPS)__
<img src="https://github.com/frtru/GemParticles/blob/dev-master/gifs_and_screenshots/heavy_rain_cropped_big.gif">

## Launching or installing the project
The project uses CMake files for portability and the [Conan package manager](conan.io) to manage the dependencies so in order to launch the whole thing you have to
1. Ensure you have both CMake (at least 3.10) and Conan installed. See https://cmake.org/install/ and https://docs.conan.io/en/latest/installation.html respectively for more details.
2. `mkdir build && cd build`
3. `conan install ..` (NOTE: it's possible you have to run `conan profile new default --detect` beforehand and set prefered compiler and architecture to 64 bits which is the architecture I've been using)
4. Generate the projects using CMake (`cmake .. -G "MY PREFERED BUILD TOOL"`)
5. Build using the generated files
6. Launch by passing the project name to the executable (e.g. `./GemparticlesApp.exe lit_particles`)

## External libraries
I'm using various external libraries in this project which are listed in the file conanfile.txt 
* ImGui
* GLM
* Glew
* GLFW
* STB
* OpenGL

## Utilities
I pretty much built this from scratch looking up efficient design patterns and tutorials. So you'll find a handful of utilities that I built to help me create stuff more easily. Most of them are named as *modules*.
* Camera
* Light module
* Shader module
* Texture module
* Timer

And last but not least, some wrapper utilities I built around ImGui examples. This includes
* a Property editor
* a logger

## Extending the project
If you desire to create your own project using this "*engine*" or the project structure you can
1. Add the project to the list of sub-directories in [projects cmakelists.txt file](https://github.com/frtru/GemParticles/blob/master/src/projects/cmakelists.txt) 
2. Register the project in the [project dictionary](https://github.com/frtru/GemParticles/blob/master/src/projects/project_dictionary.cc) (if you use the REGISTER_STD_PROJECT you'll have to define the `init`, `run` and `terminate` functions in your project)
3. Add your own cmakelists.txt and sub-directory in the projects/ folder
4. Refer to the other projects' blueprints or *_project.cc files 
5. Run the GemParticlesApp (main) executable with the name of your project passed as an argument. 
