cmake_minimum_required(VERSION 3.10.2)
project(fractal)

# includes custom cmakes
set(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)

find_package(glfw3 3.2 REQUIRED)

find_package(OpenGL REQUIRED)
include_directories(${OPENGL_INCLUDE_DIR})

set(SOURCE_FILES src/main.cpp)

add_executable(fractal ${SOURCE_FILES})
target_link_libraries(fractal ${OPENGL_LIBRARIES} ${GLEW_LIBRARIES} glfw)

