#include "../include/something.h"
#include <iostream>
#include <string>

int main(int argc, char** argv) {
  std::string s = argv[1];
  std::cout << "results for " << s << ": " << do_something(s) << std::endl;
  return 0;
}
