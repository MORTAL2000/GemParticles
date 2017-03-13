find_path(ANTTWEAKBAR_INCLUDE_DIRS "AntTweakBar.h"
	PATHS $ENV{ANTTWEAKBAR_HOME}/include)

find_library(ANTTWEAKBAR_LIBRARIES NAMES AntTweakBar AntTweakBar64
	PATHS $ENV{ANTTWEAKBAR_HOME}/lib)

INCLUDE(FindPackageHandleStandardArgs)
FIND_PACKAGE_HANDLE_STANDARD_ARGS(ANTTWEAKBAR DEFAULT_MSG
                                  ANTTWEAKBAR_LIBRARIES ANTTWEAKBAR_INCLUDE_DIRS)

mark_as_advanced(ANTTWEAKBAR_INCLUDE_DIRS ANTTWEAKBAR_LIBRARIES)